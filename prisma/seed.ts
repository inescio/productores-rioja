const { PrismaClient, Role } = require('@prisma/client');
const { productoresData: mockProductoresData, categorias: mockCategorias } = require('../src/data/productores');
const { hashSync } = require('bcryptjs');

const prisma = new PrismaClient();

// Define una contraseña temporal para todos los productores
const TEMPORARY_PASSWORD = "password123";
const HASHED_PASSWORD = hashSync(TEMPORARY_PASSWORD, 10);

async function main() {
  console.log(`Start seeding ...`);

  // 1. Seed Categorías con campos mejorados
  const categoriasMap = new Map();
  
  for (const mockCategoria of mockCategorias) {
    const categoriaNombre = mockCategoria.id;

    const categoria = await prisma.categoria.upsert({
      where: { nombre: categoriaNombre },
      update: {
        descripcion: `Categoría de ${mockCategoria.nombre}`,
        icono: mockCategoria.icon || null,
        color: mockCategoria.color || null,
        activa: true,
      },
      create: {
        nombre: categoriaNombre,
        descripcion: `Categoría de ${mockCategoria.nombre}`,
        icono: mockCategoria.icon || null,
        color: mockCategoria.color || null,
        activa: true,
      },
    });
    categoriasMap.set(categoriaNombre, categoria);
    console.log(`Created/found categoria: ${categoria.nombre} with id ${categoria.id}`);
  }

  // 2. Seed Productores y sus Productos
  for (let i = 0; i < mockProductoresData.length; i++) {
    const productorData = mockProductoresData[i];
    const userEmail = `productor${i + 1}@example.com`;

    // Intentar encontrar o crear el usuario
    let user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userEmail,
          name: productorData.nombre,
          role: Role.PRODUCTOR,
        },
      });
      console.log(`Created user: ${user.email}`);
    } else {
      console.log(`Found user: ${user.email}`);
    }

    // Encontrar la categoría correspondiente
    const categoriaDB = categoriasMap.get(productorData.categoria);
    if (!categoriaDB) {
      console.warn(`Categoría ${productorData.categoria} no encontrada. Saltando productor ${productorData.nombre}`);
      continue;
    }

    // Crear o actualizar el Productor con campos mejorados
    const productor = await prisma.productor.upsert({
      where: { userId: user.id },
      update: {
        nombre: productorData.nombre,
        ubicacion: productorData.ubicacion,
        telefono: productorData.telefono || null,
        whatsapp: productorData.whatsapp || null,
        instagram: productorData.instagram || null,
        descripcion: productorData.descripcion || `Productor especializado en ${productorData.categoria}`,
        imagen: productorData.imagen || null,
        rating: productorData.rating || 0.0,
        totalReviews: 0, // Nuevo campo
        categoriaId: categoriaDB.id,
        aprobado: true,
        fechaAprobacion: new Date(),
      },
      create: {
        user: {
          connect: { id: user.id },
        },
        nombre: productorData.nombre,
        ubicacion: productorData.ubicacion,
        telefono: productorData.telefono || null,
        whatsapp: productorData.whatsapp || null,
        instagram: productorData.instagram || null,
        descripcion: productorData.descripcion || `Productor especializado en ${productorData.categoria}`,
        imagen: productorData.imagen || null,
        rating: productorData.rating || 0.0,
        totalReviews: 0, // Nuevo campo
        categoria: {
          connect: { id: categoriaDB.id },
        },
        aprobado: true,
        fechaSolicitud: new Date(),
        fechaAprobacion: new Date(),
      },
    });
    console.log(`Created/updated productor: ${productor.nombre}`);

    // 3. Seed Productos con campos mejorados
    for (const productoData of productorData.productos) {
      // Limpiar productos existentes del productor para evitar duplicados
      await prisma.producto.deleteMany({
        where: {
          productorId: productor.id,
          nombre: productoData.nombre,
        },
      });

      // Convertir precio string a Decimal
      let precioDecimal = null;
      if (productoData.precio && productoData.precio !== "Consultar") {
        // Extraer número del string precio (ej: "$1500" -> 1500)
        const precioNumero = productoData.precio.replace(/[^\d.]/g, '');
        if (precioNumero && !isNaN(parseFloat(precioNumero))) {
          precioDecimal = parseFloat(precioNumero);
        }
      }

      await prisma.producto.create({
        data: {
          nombre: productoData.nombre,
          descripcion: null, // Campo que no existe en datos originales
          imagen: productoData.imagen || null,
          precio: precioDecimal,
          unidad: "unidad", // Valor por defecto
          disponible: productoData.disponible ?? true,
          destacado: false, // Valor por defecto
          stock: null, // No tenemos esta info en datos originales
          productor: {
            connect: { id: productor.id },
          },
        },
      });
      console.log(`  Created producto: ${productoData.nombre} for ${productor.nombre}`);
    }
  }

  // 4. Crear un usuario admin de ejemplo
  const adminEmail = "admin@productores-rioja.com";
  let adminUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Administrador",
        role: Role.ADMIN,
      },
    });
    console.log(`Created admin user: ${adminUser.email}`);
  }

  console.log(`Seeding finished.`);
  console.log(`\n🔑 Información importante:`);
  console.log(`- Contraseña temporal para productores: ${TEMPORARY_PASSWORD}`);
  console.log(`- Email admin: ${adminEmail}`);
  console.log(`- Total productores: ${mockProductoresData.length}`);
  console.log(`- Total categorías: ${mockCategorias.length}`);
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