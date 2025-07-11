// REEMPLAZA TODAS LAS IMÁGENES CON ESTAS URLs DE PEXELS QUE SÍ FUNCIONAN
export const categorias = [
  { id: 'todos', nombre: 'Todos', icon: '🏪', color: 'bg-gray-100' },
  { id: 'vinos', nombre: 'Vinos y Bodegas', icon: '🍷', color: 'bg-red-100' },
  { id: 'gastronomia', nombre: 'Gastronomía Regional', icon: '🥟', color: 'bg-orange-100' },
  { id: 'artesanias', nombre: 'Artesanías y Tejidos', icon: '🧵', color: 'bg-blue-100' },
  { id: 'agropecuarios', nombre: 'Productos del Campo', icon: '🌾', color: 'bg-green-100' },
  { id: 'dulces', nombre: 'Dulces y Conservas', icon: '🍯', color: 'bg-yellow-100' },
  { id: 'turismo', nombre: 'Turismo Rural', icon: '🏔️', color: 'bg-purple-100' }
];
export const productoresData = [
  // ========== VINOS Y BODEGAS (4) ==========
  {
    id: 1,
    nombre: "Bodega Chañarmuyo",
    categoria: "vinos",
    ubicacion: "Chañarmuyo, Famatina",
    telefono: "3837-421001",
    whatsapp: "5493837421001",
    instagram: "@chanarmuyowines",
    descripcion: "Bodega de altura ubicada en Chañarmuyo, con viñedos a 1.720 msnm. Enoturismo, hospedaje y vinos de autor.",
    imagen: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    productos: [
      { id: 1, nombre: "Chardonnay", imagen: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.500", disponible: true },
      { id: 2, nombre: "Cabernet Sauvignon", imagen: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$4.200", disponible: true },
      { id: 3, nombre: "Gran Malbec", imagen: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$4.800", disponible: true }
    ]
  },
  {
    id: 2,
    nombre: "Cooperativa La Riojana",
    categoria: "vinos",
    ubicacion: "Chilecito",
    telefono: "3825-422200",
    whatsapp: "5493825422200",
    instagram: "@lariojanacoop",
    descripcion: "Cooperativa vitivinícola más grande del país. Pioneros en vinos orgánicos certificados y aceite de oliva premium.",
    imagen: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    productos: [
      { id: 4, nombre: "Raza Argentina", imagen: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.900", disponible: true },
      { id: 5, nombre: "Torrontés Orgánico", imagen: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.700", disponible: true },
      { id: 6, nombre: "Aceite de Oliva Virgen", imagen: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300", precio: "$1.800", disponible: true }
    ]
  },
  {
  id: 3,
  nombre: "Valle de la Puerta",
  categoria: "vinos",
  ubicacion: "Vichigasta",
  telefono: "3825-497333",
  whatsapp: "5493825497333",
  instagram: "@valledelapuerta",
  descripcion: "Viñedos y olivares en Vichigasta. Bodega boutique que exporta vinos premium y aceite de oliva gourmet.",
  // ✅ BODEGA CON VIÑEDOS (no fútbol):
imagen: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating: 4.7,
  productos: [
    { 
      id: 7, 
      nombre: "Malbec Estate", 
      // ✅ BOTELLA DE VINO TINTO (no verduras):
      imagen: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=300", 
      precio: "$5.100", 
      disponible: true 
    },
    { 
      id: 8, 
      nombre: "Blend Reserva", 
      // ✅ COPA DE VINO TINTO (no whisky):
      imagen: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=300", 
      precio: "$4.500", 
      disponible: true 
    },
    { 
      id: 9, 
      nombre: "Aceite Premium", 
      // ✅ ESTA YA ESTÁ BIEN - ACEITE DE OLIVA:
      imagen: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300", 
      precio: "$2.400", 
      disponible: true 
    }
  ]
},

  {
    id: 4,
    nombre: "Bodega Santa Florentina",
    categoria: "vinos",
    ubicacion: "Vinchina",
    telefono: "3825-470155",
    whatsapp: "5493825470155",
    instagram: "@santaflorentina",
    descripcion: "Bodega familiar en Vinchina, elabora vinos de altura con uvas cultivadas en el valle más alto de Argentina.",
    imagen: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    productos: [
      { id: 10, nombre: "Syrah de Altura", imagen: "https://images.pexels.com/photos/1407847/pexels-photo-1407847.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.800", disponible: true },
      { id: 11, nombre: "Tannat Vinchina", imagen: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$4.100", disponible: true },
      { id: 12, nombre: "Rosé de Malbec", imagen: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.900", disponible: true }
    ]
  },

  // ========== GASTRONOMÍA REGIONAL (4) ==========
  {
    id: 5,
    nombre: "Empanadas La Tradición",
    categoria: "gastronomia",
    ubicacion: "Nonogasta",
    telefono: "3825-678901",
    whatsapp: "5493825678901",
    instagram: "@empanadastradicion",
    descripcion: "Empanadas artesanales con recetas tradicionales riojanas. Masa casera y rellenos con productos locales de la región.",
    imagen: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    productos: [
      { id: 13, nombre: "Empanadas de Carne Criolla", imagen: "https://images.pexels.com/photos/4397273/pexels-photo-4397273.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$200 c/u", disponible: true },
      { id: 14, nombre: "Empanadas de Cabrito", imagen: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$220 c/u", disponible: true },
      { id: 15, nombre: "Empanadas de Humita", imagen: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$180 c/u", disponible: true }
    ]
  },
  {
    id: 6,
    nombre: "Panadería Don Alberto",
    categoria: "gastronomia",
    ubicacion: "La Rioja Capital",
    telefono: "3822-423456",
    whatsapp: "5493822423456",
    instagram: "@panaderiadonalberto",
    descripcion: "Panadería tradicional riojana. Especialistas en pan casero, facturas regionales y tortas fritas artesanales.",
    imagen: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    productos: [
      { id: 16, nombre: "Pan Casero Riojano", imagen: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$450", disponible: true },
      { id: 17, nombre: "Tortas Fritas", imagen: "https://images.pexels.com/photos/5562327/pexels-photo-5562327.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$120 c/u", disponible: true },
      { id: 18, nombre: "Facturas Caseras", imagen: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$150 c/u", disponible: true }
    ]
  },
  {
    id: 7,
    nombre: "Locro de la Abuela Rosa",
    categoria: "gastronomia",
    ubicacion: "Chilecito",
    telefono: "3825-556789",
    whatsapp: "5493825556789",
    instagram: "@locroabuelarosa",
    descripcion: "Comidas típicas riojanas para eventos. Locro, tamales, humita en chala y asado de cabrito al estilo regional.",
    imagen: "https://images.pexels.com/photos/8992207/pexels-photo-8992207.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    productos: [
      { id: 19, nombre: "Locro Riojano", imagen: "https://images.pexels.com/photos/8992207/pexels-photo-8992207.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.200 porción", disponible: true },
      { id: 20, nombre: "Tamales Caseros", imagen: "https://images.pexels.com/photos/4397273/pexels-photo-4397273.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$250 c/u", disponible: true },
      { id: 21, nombre: "Humita en Chala", imagen: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$200 c/u", disponible: true }
    ]
  },
  {
    id: 8,
    nombre: "Quesería Los Llanos",
    categoria: "gastronomia",
    ubicacion: "Los Llanos",
    telefono: "3827-445678",
    whatsapp: "5493827445678",
    instagram: "@queseriallanos",
    descripcion: "Productos lácteos artesanales de cabra y vaca. Quesos frescos, madurados y especiales con hierbas de la zona.",
    imagen: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    productos: [
      { id: 22, nombre: "Queso de Cabra Fresco", imagen: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.600", disponible: true },
      { id: 23, nombre: "Queso Madurado 6 meses", imagen: "https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.800", disponible: true },
      { id: 24, nombre: "Ricota de Cabra", imagen: "https://images.pexels.com/photos/1398944/pexels-photo-1398944.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.400", disponible: true }
    ]
  },

  // ========== ARTESANÍAS Y TEJIDOS (4) ==========
  {
    id: 9,
    nombre: "Tejidos Artesanales Pachamama",
    categoria: "artesanias",
    ubicacion: "Famatina",
    telefono: "3825-789123",
    whatsapp: "5493825789123",
    instagram: "@pachamama_tejidos",
    descripcion: "Creamos piezas únicas en telar con lana de oveja y llama. Mantas, ponchos y accesorios con diseños ancestrales.",
    imagen: "https://images.pexels.com/photos/4622920/pexels-photo-4622920.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    productos: [
      { id: 25, nombre: "Poncho de Llama Premium", imagen: "https://images.pexels.com/photos/7156899/pexels-photo-7156899.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$12.500", disponible: true },
      { id: 26, nombre: "Manta Tradicional", imagen: "https://images.pexels.com/photos/6754267/pexels-photo-6754267.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$8.900", disponible: true },
      { id: 27, nombre: "Bufanda Alpaca", imagen: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.400", disponible: true }
    ]
  },
  {
    id: 10,
    nombre: "Cerámica Tierra Colorada",
    categoria: "artesanias",
    ubicacion: "Aimogasta",
    telefono: "3827-345678",
    whatsapp: "5493827345678",
    instagram: "@tierracolorada",
    descripcion: "Alfarería tradicional riojana. Trabajamos con arcilla local creando piezas decorativas y utilitarias ancestrales.",
    imagen: "https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    productos: [
      { id: 28, nombre: "Jarrones Decorativos", imagen: "https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$4.500", disponible: true },
      { id: 29, nombre: "Platos Artesanales", imagen: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.200", disponible: true },
      { id: 30, nombre: "Tazas de Arcilla", imagen: "https://images.pexels.com/photos/6544/coffee-cup-mug-cafe.jpg?auto=compress&cs=tinysrgb&w=300", precio: "$1.800", disponible: true }
    ]
  },
  {
    id: 11,
    nombre: "Curtiembre El Gaucho",
    categoria: "artesanias",
    ubicacion: "Chamical",
    telefono: "3827-567890",
    whatsapp: "5493827567890",
    instagram: "@curtielgaucho",
    descripcion: "Trabajos en cuero artesanales. Cinturones, carteras, monturas y accesorios tradicionales de campo riojano.",
    imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    productos: [
      { id: 31, nombre: "Cinturones de Cuero", imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.800", disponible: true },
      { id: 32, nombre: "Carteras Artesanales", imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$5.500", disponible: true },
      { id: 33, nombre: "Billeteras de Cabra", imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.200", disponible: true }
    ]
  },
  {
    id: 12,
    nombre: "Platería Andina",
    categoria: "artesanias",
    ubicacion: "Tinogasta",
    telefono: "3837-422567",
    whatsapp: "5493837422567",
    instagram: "@plateriaandina",
    descripcion: "Joyería en plata con diseños precolombinos. Anillos, pulseras y collares inspirados en la cultura diaguita.",
    imagen: "https://images.pexels.com/photos/6120255/pexels-photo-6120255.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    productos: [
      { id: 34, nombre: "Anillos Diaguitas", imagen: "https://images.pexels.com/photos/6120255/pexels-photo-6120255.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$4.200", disponible: true },
      { id: 35, nombre: "Pulseras de Plata", imagen: "https://images.pexels.com/photos/6120255/pexels-photo-6120255.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.600", disponible: true },
      { id: 36, nombre: "Collares Andinos", imagen: "https://images.pexels.com/photos/6120255/pexels-photo-6120255.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$5.800", disponible: true }
    ]
  },

  // ========== PRODUCTOS DEL CAMPO (4) ==========
  {
    id: 13,
    nombre: "Aceitunas San Blas",
    categoria: "agropecuarios",
    ubicacion: "San Blas de los Sauces",
    telefono: "3825-567890",
    whatsapp: "5493825567890",
    instagram: "@aceitunassanblas",
    descripcion: "Productores de aceitunas Arauco y aceite de oliva extra virgen. Cultivo tradicional en terrazas de montaña.",
    imagen: "https://images.pexels.com/photos/1328888/pexels-photo-1328888.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    productos: [
      { id: 37, nombre: "Aceitunas Arauco", imagen: "https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$950", disponible: true },
      { id: 38, nombre: "Aceite Extra Virgen", imagen: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300", precio: "$2.100", disponible: true },
      { id: 39, nombre: "Paté de Aceitunas", imagen: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.600", disponible: true }
    ]
  },
  {
    id: 14,
    nombre: "Nueces del Valle",
    categoria: "agropecuarios",
    ubicacion: "Catuna",
    telefono: "3825-498765",
    whatsapp: "5493825498765",
    instagram: "@nuecesdelvalle",
    descripcion: "Producción de nueces, almendras y frutos secos. Cultivo sustentable en el microclima privilegiado de Catuna.",
    imagen: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    productos: [
      { id: 40, nombre: "Nueces Peladas", imagen: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.400", disponible: true },
      { id: 41, nombre: "Almendras Riojanas", imagen: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.200", disponible: true },
      { id: 42, nombre: "Mix Frutos Secos", imagen: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.800", disponible: true }
    ]
  },
  {
    id: 15,
    nombre: "Cabras Serranas",
    categoria: "agropecuarios",
    ubicacion: "Vinchina",
    telefono: "3825-470234",
    whatsapp: "5493825470234",
    instagram: "@cabrasserranas",
    descripcion: "Cría de cabras criollas en las sierras de Vinchina. Carne, leche y cueros de cabra de pastoreo libre en altura.",
    imagen: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    productos: [
      { id: 43, nombre: "Carne de Cabrito", imagen: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.800 kg", disponible: true },
      { id: 44, nombre: "Leche de Cabra", imagen: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$450 litro", disponible: true },
      { id: 45, nombre: "Cueros de Cabra", imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.500", disponible: true }
    ]
  },
  {
    id: 16,
    nombre: "Apiario Los Sauces",
    categoria: "agropecuarios",
    ubicacion: "Villa Unión",
    telefono: "3825-789012",
    whatsapp: "5493825789012",
    instagram: "@apiariolosauces",
    descripcion: "Miel pura de flores nativas del valle de Villa Unión. Producción orgánica respetando el ecosistema serrano.",
    imagen: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    productos: [
      { id: 46, nombre: "Miel de Algarrobo", imagen: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.800", disponible: true },
      { id: 47, nombre: "Polen Natural", imagen: "https://images.pexels.com/photos/51931/honey-bee-honeybee-bee-pollen-51931.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$2.500", disponible: true },
      { id: 48, nombre: "Propóleo Puro", imagen: "https://images.pexels.com/photos/6140696/pexels-photo-6140696.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$3.200", disponible: true }
    ]
  },

  // ========== DULCES Y CONSERVAS (4) ==========
  {
    id: 17,
    nombre: "Dulces Riojanos Doña Carmen",
    categoria: "dulces",
    ubicacion: "La Rioja Capital",
    telefono: "3822-456789",
    whatsapp: "5493822456789",
    instagram: "@dulcesdonacarmen",
    descripcion: "Dulces artesanales con recetas centenarias. Especialistas en dulce de cayote, membrillo y batata riojana.",
    imagen: "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    productos: [
      { id: 49, nombre: "Dulce de Cayote", imagen: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.350", disponible: true },
      { id: 50, nombre: "Dulce de Membrillo", imagen: "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.250", disponible: true },
      { id: 51, nombre: "Dulce de Batata", imagen: "https://images.pexels.com/photos/2762667/pexels-photo-2762667.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.180", disponible: true }
    ]
  },
  {
    id: 18,
    nombre: "Conservas La Puna",
    categoria: "dulces",
    ubicacion: "Guandacol",
    telefono: "3825-455123",
    whatsapp: "5493825455123",
    instagram: "@conservaslapuna",
    descripcion: "Conservas caseras de frutas y verduras de la región. Escabeches, pickles y mermeladas con sabor tradicional.",
    imagen: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    productos: [
      { id: 52, nombre: "Mermelada de Tuna", imagen: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$980", disponible: true },
      { id: 53, nombre: "Escabeche de Verduras", imagen: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$850", disponible: true },
      { id: 54, nombre: "Pickles Riojanos", imagen: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$750", disponible: true }
    ]
  },
  {
    id: 19,
    nombre: "Pastelería Antigua",
    categoria: "dulces",
    ubicacion: "Chilecito",
    telefono: "3825-423789",
    whatsapp: "5493825423789",
    instagram: "@pasteleriaantigua",
    descripcion: "Pastelería tradicional con más de 50 años. Alfajores riojanos, sopaipillas y dulces típicos de la región.",
    imagen: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    productos: [
      { id: 55, nombre: "Alfajores Riojanos", imagen: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$180 c/u", disponible: true },
      { id: 56, nombre: "Sopaipillas Caseras", imagen: "https://images.pexels.com/photos/5562327/pexels-photo-5562327.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$120 c/u", disponible: true },
      { id: 57, nombre: "Budín de Nuez", imagen: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.450", disponible: true }
    ]
  },
  {
    id: 20,
    nombre: "Dulces del Molino",
    categoria: "dulces",
    ubicacion: "Aimogasta",
    telefono: "3827-334567",
    whatsapp: "5493827334567",
    instagram: "@dulcesdelmolino",
    descripcion: "Dulces regionales elaborados en molino de piedra. Arrope de chañar, aloja y productos únicos de La Rioja.",
    imagen: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    productos: [
      { id: 58, nombre: "Arrope de Chañar", imagen: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.680", disponible: true },
      { id: 59, nombre: "Aloja Tradicional", imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$950", disponible: true },
      { id: 60, nombre: "Patay de Algarroba", imagen: "https://images.pexels.com/photos/2762667/pexels-photo-2762667.jpeg?auto=compress&cs=tinysrgb&w=300", precio: "$1.250", disponible: true }
    ]
  },

  // ========== TURISMO RURAL (4) ==========
  {
    id: 21,
    nombre: "Parque Nacional Talampaya",
    categoria: "turismo",
    ubicacion: "Villa Unión",
    telefono: "3825-470356",
    whatsapp: "5493825470356",
    instagram: "@talampaya_oficial",
    descripcion: "Patrimonio de la Humanidad UNESCO. Formaciones rocosas rojizas de 250 millones de años, petroglifos y fósiles de dinosaurios en el desierto riojano.",
    imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkrRHB7OmHavxaawEJRBboFODEppczM-Diev7ngGWs0msHVkLekiELTOO27t6Z99r-gjnyoQPBrnV1O0RPGrUmj3RSN9Ys1Flar2guVfSx8o2x24R_uLOML6iragISLm7UESqQJQ=s680-w680-h510-rw",
    rating: 4.9,
    productos: [
      {
        id: 61,
        nombre: "Excursión Cañón de Talampaya",
         imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkrRHB7OmHavxaawEJRBboFODEppczM-Diev7ngGWs0msHVkLekiELTOO27t6Z99r-gjnyoQPBrnV1O0RPGrUmj3RSN9Ys1Flar2guVfSx8o2x24R_uLOML6iragISLm7UESqQJQ=s680-w680-h510-rw",
   precio: "$4.500",
        disponible: true
      },
      {
        id: 62,
        nombre: "Tour Petroglifos",
        imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkrRHB7OmHavxaawEJRBboFODEppczM-Diev7ngGWs0msHVkLekiELTOO27t6Z99r-gjnyoQPBrnV1O0RPGrUmj3RSN9Ys1Flar2guVfSx8o2x24R_uLOML6iragISLm7UESqQJQ=s680-w680-h510-rw",
    precio: "$3.200",
        disponible: true
      },
      {
        id: 63,
        nombre: "Observación Astronómica",
        imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkrRHB7OmHavxaawEJRBboFODEppczM-Diev7ngGWs0msHVkLekiELTOO27t6Z99r-gjnyoQPBrnV1O0RPGrUmj3RSN9Ys1Flar2guVfSx8o2x24R_uLOML6iragISLm7UESqQJQ=s680-w680-h510-rw",
    precio: "$2.800",
        disponible: true
      }
    ]
  },
  {
    id: 22,
    nombre: "Cuesta de Miranda",
    categoria: "turismo",
    ubicacion: "Chilecito - Villa Unión",
    telefono: "3825-427890",
    whatsapp: "5493825427890",
    instagram: "@cuestademiranda",
    descripcion: "Ruta escénica de montaña con 40 curvas cerradas a 2.020 msnm. Paisajes espectaculares entre cerros multicolores y quebradas profundas.",
    imagen: "https://www.runacay.tur.ar/wp-content/uploads/2024/06/15712-300x225.jpg",
    rating: 4.8,
    productos: [
      {
        id: 64,
        nombre: "Tour Fotográfico",
        imagen: "https://talampayaok.com.ar/wp-content/uploads/2023/11/IMG_2157-768x576.jpg",
        precio: "$3.800",
        disponible: true
      },
      {
        id: 65,
        nombre: "Trekking Mirador",
        imagen: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300",
        precio: "$2.500",
        disponible: true
      },
      {
        id: 66,
        nombre: "Almuerzo Serrano",
        imagen: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=300",
        precio: "$1.800",
        disponible: true
      }
    ]
  },
  {
    id: 23,
    nombre: "Termas de Santa Teresita",
    categoria: "turismo",
    ubicacion: "Santa Teresita, Chamical",
    telefono: "3827-498123",
    whatsapp: "5493827498123",
    instagram: "@termassantateresita",
    descripcion: "Aguas termales naturales a 38°C con propiedades medicinales. Spa termal rodeado de cerros, ideal para relajación y turismo de bienestar.",
    imagen: "https://www.elindependiente.com.ar/elindependiente/1.0/img/091593676.jpg",
    rating: 4.7,
    productos: [
      {
        id: 67,
        nombre: "Día de Spa Termal",
        imagen: "https://turismo.larioja.gob.ar/wp-content/uploads/2025/03/Termas-de-Santa-Teresita-Departamento-Arauco-1-1.jpeg",
        precio: "$2.200",
        disponible: true
      },
      {
        id: 68,
        nombre: "Masajes Relajantes",
        imagen: "https://turismo.larioja.gob.ar/wp-content/uploads/2025/03/Termas-de-Santa-Teresita-Masajes-Arauco-1-scaled.jpg",
        precio: "$3.500",
        disponible: true
      },
      {
        id: 69,
        nombre: "Alojamiento Termal",
        imagen: "https://turismo.larioja.gob.ar/wp-content/uploads/2025/03/DSC3610-scaled.jpg",
        precio: "$4.800 noche",
        disponible: true
      }
    ]
  },
  
];
