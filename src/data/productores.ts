import { Productor, Categoria } from '../types';

export const productoresData: Productor[] = [
  {
    id: 1,
    nombre: "Bodega Familiar Los Quebrachos",
    categoria: "vinos",
    ubicacion: "Chilecito",
    telefono: "3825-123456",
    whatsapp: "5493825123456",
    instagram: "@losquebrachos",
    descripcion: "Bodega familiar con 3 generaciones dedicadas al cultivo de vid en los valles riojanos. Especialistas en Torrontés y Cabernet.",
    imagen: "https://images.unsplash.com/photo-1506905338479-f382a8d9a8a0?w=400",
    rating: 4.8,
    productos: [
      { id: 1, nombre: "Torrontés Riojano", imagen: "https://images.unsplash.com/photo-1569275808161-eb3e9736c2e0?w=300", precio: "$2.500", disponible: true },
      { id: 2, nombre: "Cabernet Sauvignon", imagen: "https://images.unsplash.com/photo-1585553616435-fb4c96b59fcb?w=300", disponible: true },
      { id: 3, nombre: "Malbec Reserva", imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=300", precio: "$3.200", disponible: true }
    ]
  },
  {
    id: 2,
    nombre: "Dulces Riojanos Doña Carmen",
    categoria: "alimentos",
    ubicacion: "La Rioja Capital",
    telefono: "3822-456789",
    whatsapp: "5493822456789",
    instagram: "@dulcesdonacarmen",
    descripcion: "Elaboramos dulces artesanales con recetas familiares. Especialistas en dulce de cayote, membrillo y batata.",
    imagen: "https://images.unsplash.com/photo-1571115764595-644a64148ed8?w=400",
    rating: 4.9,
    productos: [
      { id: 4, nombre: "Dulce de Cayote", imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300", precio: "$1.200", disponible: true },
      { id: 5, nombre: "Conserva de Membrillo", imagen: "https://images.unsplash.com/photo-1599719026166-b3f9a8b87a8c?w=300", disponible: true },
      { id: 6, nombre: "Dulce de Batata", imagen: "https://images.unsplash.com/photo-1606312616180-b57b94c62a1d?w=300", precio: "$1.100", disponible: true }
    ]
  },
  {
    id: 3,
    nombre: "Tejidos Artesanales Pachamama",
    categoria: "artesanias",
    ubicacion: "Famatina",
    telefono: "3825-789123",
    whatsapp: "5493825789123",
    instagram: "@pachamama_tejidos",
    descripcion: "Creamos piezas únicas en telar con lana de oveja y llama. Mantas, ponchos y accesorios con diseños tradicionales.",
    imagen: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    rating: 4.7,
    productos: [
      { id: 7, nombre: "Poncho de Llama", imagen: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300", precio: "$8.500", disponible: true },
      { id: 8, nombre: "Manta Tradicional", imagen: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300", disponible: true },
      { id: 9, nombre: "Bufanda Artesanal", imagen: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=300", precio: "$2.800", disponible: true }
    ]
  },
  {
    id: 4,
    nombre: "Quesos de Cabra El Mollar",
    categoria: "lacteos",
    ubicacion: "Chamical",
    telefono: "3827-234567",
    whatsapp: "5493827234567",
    instagram: "@quesoselmoller",
    descripcion: "Producción artesanal de quesos de cabra en la zona del Mollar. Productos frescos y madurados con hierbas de la región.",
    imagen: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400",
    rating: 4.6,
    productos: [
      { id: 10, nombre: "Queso Fresco de Cabra", imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300", precio: "$1.800", disponible: true },
      { id: 11, nombre: "Queso Madurado", imagen: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=300", disponible: true },
      { id: 12, nombre: "Queso con Hierbas", imagen: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=300", precio: "$2.200", disponible: true }
    ]
  },
  {
    id: 5,
    nombre: "Cerámica Tierra Colorada",
    categoria: "artesanias",
    ubicacion: "Aimogasta",
    telefono: "3827-345678",
    whatsapp: "5493827345678",
    instagram: "@tierracolorada",
    descripcion: "Alfarería tradicional riojana. Trabajamos con arcilla local creando piezas decorativas y utilitarias con técnicas ancestrales.",
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    rating: 4.5,
    productos: [
      { id: 13, nombre: "Jarrones Decorativos", imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300", precio: "$3.500", disponible: true },
      { id: 14, nombre: "Platos Artesanales", imagen: "https://images.unsplash.com/photo-1610701596007-bc1616c53141?w=300", disponible: true },
      { id: 15, nombre: "Tazas de Arcilla", imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300", precio: "$1.200", disponible: true }
    ]
  },
  {
    id: 6,
    nombre: "Aceitunas San Blas",
    categoria: "agropecuarios",
    ubicacion: "San Blas de los Sauces",
    telefono: "3825-567890",
    whatsapp: "5493825567890",
    instagram: "@aceitunassanblas",
    descripcion: "Productores de aceitunas en conserva y aceite de oliva extra virgen. Variedad Arauco, típica de La Rioja.",
    imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
    rating: 4.8,
    productos: [
      { id: 16, nombre: "Aceitunas en Conserva", imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", precio: "$850", disponible: true },
      { id: 17, nombre: "Aceite de Oliva Extra Virgen", imagen: "https://images.unsplash.com/photo-1568527227550-ac5285fb2f1d?w=300", disponible: true },
      { id: 18, nombre: "Paté de Aceitunas", imagen: "https://images.unsplash.com/photo-1571197288638-f79ca7ae5de4?w=300", precio: "$1.400", disponible: true }
    ]
  },
  {
    id: 7,
    nombre: "Empanadas La Tradición",
    categoria: "gastronomia",
    ubicacion: "Nonogasta",
    telefono: "3825-678901",
    whatsapp: "5493825678901",
    instagram: "@empanadastradicion",
    descripcion: "Empanadas artesanales con recetas tradicionales riojanas. Masa casera y rellenos con productos locales.",
    imagen: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400",
    rating: 4.9,
    productos: [
      { id: 19, nombre: "Empanadas de Carne", imagen: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=300", precio: "$180 c/u", disponible: true },
      { id: 20, nombre: "Empanadas de Cabra", imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300", disponible: true },
      { id: 21, nombre: "Empanadas de Humita", imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300", precio: "$160 c/u", disponible: true }
    ]
  },
  {
    id: 8,
    nombre: "Miel Valle Fértil",
    categoria: "alimentos",
    ubicacion: "Villa Unión",
    telefono: "3825-789012",
    whatsapp: "5493825789012",
    instagram: "@mielvallefertil",
    descripcion: "Miel pura de flores nativas del valle. Producción sustentable respetando el ecosistema local.",
    imagen: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
    rating: 4.7,
    productos: [
      { id: 22, nombre: "Miel de Flores Nativas", imagen: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300", precio: "$1.500", disponible: true },
      { id: 23, nombre: "Polen de Abeja", imagen: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300", disponible: true },
      { id: 24, nombre: "Propóleo Natural", imagen: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300", precio: "$2.800", disponible: true }
    ]
  }
];

export const categorias: Categoria[] = [
  { id: 'todos', nombre: 'Todos', icon: '🏪', color: 'bg-gray-100' },
  { id: 'vinos', nombre: 'Vinos', icon: '🍷', color: 'bg-red-100' },
  { id: 'alimentos', nombre: 'Alimentos', icon: '🧀', color: 'bg-yellow-100' },
  { id: 'artesanias', nombre: 'Artesanías', icon: '🧵', color: 'bg-blue-100' },
  { id: 'lacteos', nombre: 'Lácteos', icon: '🥛', color: 'bg-green-100' },
  { id: 'agropecuarios', nombre: 'Agropecuarios', icon: '🌾', color: 'bg-orange-100' },
  { id: 'gastronomia', nombre: 'Gastronomía', icon: '🍽️', color: 'bg-purple-100' }
];