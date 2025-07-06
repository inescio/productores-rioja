import { PrismaClient, Role } from '@prisma/client';
import { productoresData as mockProductoresData, categorias as mockCategorias } from '../src/data/productores'; // Ajusta la ruta si es necesario
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

// Define una contraseña temporal para todos los productores
const TEMPORARY_PASSWORD = "password123"; // ¡Asegúrate de que los productores la cambien!
const HASHED_PASSWORD = hashSync(TEMPORARY_PASSWORD, 10);

async function main() {
  console.log(`Start seeding ...`);

  // 1. Seed Categorias
  // Usaremos un Map para acceder fácilmente a las categorías creadas por su nombre original
  const categoriasMap = new Map<string, { id: string; nombre: string }>();
  for (const mockCategoria of mockCategorias) {
    // Asumimos que el nombre de la categoría en mockCategorias es único.
    // Si no, necesitaríamos una clave más robusta o ajustar la lógica.
    // Aquí estamos usando el 'id' de mockCategorias como el nombre único para la BD.
    // Esto podría necesitar ajuste si los 'id' de mockCategorias no son los nombres deseados.
    // Para este ejemplo, asumiré que el `id` del mock es el `nombre` que queremos en la BD.
    // Ej: mockCategoria = { id: 'vinos', nombre: 'Vinos', icon: '🍷', color: 'bg-red-100' }
    // En la BD Categoria.nombre = 'vinos'

    const categoriaNombre = mockCategoria.id; // Usando el 'id' del mock como nombre único

    const categoria = await prisma.categoria.upsert({
      where: { nombre: categoriaNombre },
      update: {},
      create: {
        nombre: categoriaNombre,
      },
    });
    categoriasMap.set(categoriaNombre, categoria);
    console.log(`Created/found categoria: ${categoria.nombre} with id ${categoria.id}`);
  }

  // 2. Seed Productores y sus Productos
  for (let i = 0; i < mockProductoresData.length; i++) {
    const productorData = mockProductoresData[i];
    const userEmail = `productor${i + 1}@example.com`; // Email ficticio

    // Intentar encontrar o crear el usuario
    let user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userEmail,
          name: productorData.nombre, // Usar el nombre del productor como nombre de usuario inicial
          // image: productorData.imagen, // Podríamos usar la imagen del productor como imagen de usuario también
          role: Role.PRODUCTOR,
          // Para NextAuth con Credentials, la contraseña se verifica en el backend,
          // pero no se almacena directamente en el modelo User si se usa el adaptador estándar sin modificaciones.
          // Para un sistema de login propio o si quisiéramos añadir un campo password al User:
          // password: HASHED_PASSWORD, // ¡Asegúrate de que el modelo User tenga un campo password!
          // Por ahora, NextAuth se encargará de las credenciales. El HASHED_PASSWORD es conceptual aquí.
        },
      });
      console.log(`Created user: ${user.email}`);
    } else {
      console.log(`Found user: ${user.email}`);
    }

    // Encontrar la categoría correspondiente
    // productorData.categoria es el 'id' del mock (ej: 'vinos')
    const categoriaDB = categoriasMap.get(productorData.categoria);
    if (!categoriaDB) {
      console.warn(`Categoría ${productorData.categoria} no encontrada en categoriasMap. Saltando productor ${productorData.nombre}`);
      continue;
    }

    // Crear o actualizar el Productor
    // Usaremos el nombre del productor como un identificador único para la carga inicial,
    // asumiendo que no hay dos productores con el mismo nombre en los datos mock.
    // Idealmente, tendríamos un ID único en los datos mock si no fuera el nombre.
    const productor = await prisma.productor.upsert({
      where: { userId: user.id }, // Un productor por usuario
      update: { // Qué actualizar si ya existe (podríamos no querer actualizar nada o solo ciertos campos)
        nombre: productorData.nombre,
        ubicacion: productorData.ubicacion,
        telefono: productorData.telefono,
        whatsapp: productorData.whatsapp,
        instagram: productorData.instagram,
        descripcion: productorData.descripcion,
        imagen: productorData.imagen,
        rating: productorData.rating,
        categoriaId: categoriaDB.id,
        aprobado: true, // Asumimos que los productores del seed están aprobados
        fechaAprobacion: new Date(),
      },
      create: {
        user: {
          connect: { id: user.id },
        },
        nombre: productorData.nombre,
        ubicacion: productorData.ubicacion,
        telefono: productorData.telefono,
        whatsapp: productorData.whatsapp,
        instagram: productorData.instagram,
        descripcion: productorData.descripcion,
        imagen: productorData.imagen,
        rating: productorData.rating,
        categoria: {
          connect: { id: categoriaDB.id },
        },
        aprobado: true,
        fechaSolicitud: new Date(),
        fechaAprobacion: new Date(),
        // Productos se crean después
      },
    });
    console.log(`Created/updated productor: ${productor.nombre}`);

    // 3. Seed Productos para este Productor
    for (const productoData of productorData.productos) {
      // Asumimos que el nombre del producto es único POR PRODUCTOR para la carga inicial.
      // Si no, necesitaríamos un ID único en los datos mock del producto.
      await prisma.producto.upsert({
        where: {
          // Necesitamos un identificador único para el producto si queremos hacer upsert.
          // Si no tenemos uno, podríamos borrar y recrear, o solo crear.
          // Por simplicidad, si el nombre no es único, esto podría dar error o actualizar el incorrecto.
          // Vamos a asumir que para el seed, podemos identificarlo por nombre Y productorId.
          // Prisma no soporta unique compuesto en `upsert` directamente en `where` de esta forma simple.
          // Una mejor aproximación sería buscarlo primero.
          // Para este seed, vamos a intentar crear y si falla por constraint único (si lo tuviéramos), lo saltamos.
          // O, más simple para el seed: borrar los productos existentes de este productor y recrearlos.
          // Aquí, simplemente crearemos, asumiendo que es la primera vez o que no hay conflictos.
          // Para hacerlo idempotente, podríamos hacer:
          // const existingProducto = await prisma.producto.findFirst({ where: { nombre: productoData.nombre, productorId: productor.id }});
          // if (!existingProducto) { ... crear ... }
          // O usar un ID compuesto si el esquema lo permite.
          // Por ahora, solo crearemos, asumiendo que el productor no tiene productos aún o que los nombres son únicos.
          // Si el nombre y productorId fueran un unique compuesto @@unique([nombre, productorId]) en el schema:
          // where: { nombre_productorId: { nombre: productoData.nombre, productorId: productor.id } },
          // update: { ... }, create: { ... }
          // Como no lo tenemos, vamos a crear directamente y si hay error de constraint, lo ignoramos para el seed.
          // Esto es riesgoso. Una mejor forma es limpiar productos del productor antes.
          // Por ahora, por simplicidad en la creación:

          // IMPORTANTE: Para que upsert funcione bien, necesitaríamos un campo verdaderamente único
          // o una combinación única en el modelo Producto. Como no lo tenemos explícitamente más allá del ID,
          // y no queremos depender del ID autogenerado para el matching,
          // vamos a hacer un create. Si el script se corre de nuevo, duplicará productos.
          // Para un seed real, se debería hacer más robusto (ej. borrar productos del productor antes de re-seed).
          // O buscar por nombre y productorId y actualizar si existe.
          id: `${productor.id}-${productoData.id}` // Crear un ID determinista para el seed si es posible
        },
        update: {
            nombre: productoData.nombre,
            descripcion: productoData.descripcion || null, // Asegurar que undefined sea null
            imagen: productoData.imagen,
            precio: productoData.precio,
            disponible: productoData.disponible,
        },
        create: {
          id: `${productor.id}-${productoData.id}`, // Crear un ID determinista para el seed
          nombre: productoData.nombre,
          descripcion: productoData.descripcion || null,
          imagen: productoData.imagen,
          precio: productoData.precio,
          disponible: productoData.disponible,
          productor: {
            connect: { id: productor.id },
          },
        }
      });
      console.log(`  Created/updated producto: ${productoData.nombre} for ${productor.nombre}`);
    }
  }

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Nota sobre HASHED_PASSWORD y User:
// Si tu modelo User en schema.prisma NO tiene un campo 'password',
// entonces no puedes asignar HASHED_PASSWORD al crearlo.
// NextAuth con el provider 'Credentials' maneja la verificación de la contraseña
// en su propia lógica, usualmente comparando el input con un hash que SÍ guardarías
// si el modelo User tuviera el campo password.
// Para el adaptador de Prisma, User.email es la clave.
// Si vas a implementar tu propio almacenamiento de hash de contraseña en el modelo User,
// asegúrate de añadir `password String?` (o similar) a tu `schema.prisma` y re-migrar.
// Para este seed, asumimos que el setup de NextAuth se hará luego y que el User creado aquí
// será usado por NextAuth. La contraseña temporal es para que sepas qué usar al probar el login.
// La gestión real del hash y la comparación la hará NextAuth o tu lógica de /api/auth.
```

**Explicación y Puntos Clave del Script:**

1.  **Importaciones:** Se importa `PrismaClient`, los datos mock, y `hashSync` de `bcryptjs`.
2.  **Contraseña Temporal:** Se define `TEMPORARY_PASSWORD` y se hashea con `bcryptjs`. **Esta contraseña (`password123`) es la que usarías para hacer login con los usuarios sembrados, a través de NextAuth (cuando lo configuremos).**
3.  **Seed Categorías:**
    *   Itera sobre `mockCategorias`.
    *   Usa `prisma.categoria.upsert` para crear la categoría si no existe (basado en el `nombre` que extraemos del `id` del mock, ej. 'vinos'), o no hacer nada si ya existe.
    *   Guarda las categorías creadas en `categoriasMap` para fácil acceso.
4.  **Seed Productores y Productos:**
    *   Itera sobre `mockProductoresData`.
    *   **Crea un `User`:**
        *   Genera un email ficticio (`productor1@example.com`, etc.).
        *   Busca si el usuario ya existe por email.
        *   Si no existe, lo crea con el email, el nombre del productor, y el rol `PRODUCTOR`.
        *   **Nota sobre la contraseña:** El script hashea una contraseña, pero el modelo `User` estándar de NextAuth no incluye un campo `password`. La verificación de contraseña con el proveedor "Credentials" de NextAuth se hace comparando el hash de la contraseña que se almacenaría (si se personaliza el modelo `User` para incluirla o se usa una tabla separada) con el hash de la contraseña ingresada. Para este seed, el `HASHED_PASSWORD` es conceptual; el login se configurará después.
    *   **Crea/Actualiza un `Productor`:**
        *   Usa `prisma.productor.upsert` para crear o actualizar el productor, vinculándolo al `User` y `Categoria` correspondientes.
        *   Se asume que `productor.userId` es único.
        *   Los productores se marcan como `aprobado: true`.
    *   **Crea/Actualiza `Producto`s:**
        *   Itera sobre los productos del productor.
        *   Usa `prisma.producto.upsert` para crear o actualizar cada producto. Para que `upsert` funcione de manera predecible y evite duplicados en re-ejecuciones, he usado un `id` determinista compuesto por `productor.id` y `productoData.id` (del mock). Esto asume que `productoData.id` es único dentro de los productos de un productor en tus datos mock.
5.  **Idempotencia:** El uso de `upsert` ayuda a que el script sea más seguro de ejecutar múltiples veces, aunque la parte de productos es un poco más compleja sin un unique natural en los datos mock aparte del ID. La generación de IDs deterministas para el seed ayuda.
6.  **Ruta de Importación:** `import { productoresData, categorias } from '../src/data/productores';` asume que tu archivo `productores.ts` está en `src/data/`. Ajusta esta ruta si es diferente.
7.  **Consola:** Hay `console.log` para ver el progreso.

**Próximos pasos para ti (localmente):**

1.  **Asegúrate de haber instalado localmente (si los pasos anteriores fallaron para mí):**
    *   `npm install prisma --save-dev`
    *   `npm install @prisma/client`
    *   `npm install ts-node --save-dev`
    *   `npm install bcryptjs`
    *   `npm install @types/bcryptjs --save-dev`
2.  **Copia el código de arriba y guárdalo en `prisma/seed.ts` en tu proyecto local.**
3.  **Actualiza tu `package.json` localmente.** Abre `package.json` y añade la sección `prisma` si no existe, o modifícala:
    ```json
    {
      // ... otras cosas de tu package.json ...
      "prisma": {
        "seed": "ts-node prisma/seed.ts"
      }
    }
    ```
4.  **Ejecuta el seed en tu terminal local:**
    ```bash
    npx prisma db seed
    ```
5.  Verifica la salida en la consola y revisa tu base de datos Neon (usando alguna herramienta de BD o el explorador de Neon) para ver si los datos se crearon.
6.  Si todo funciona, **haz commit y push** de `prisma/seed.ts` y los cambios en `package.json` y `package-lock.json` a tu repositorio.

Avísame cuando hayas podido ejecutar el seed localmente o si encuentras algún problema. Este es un paso grande.
