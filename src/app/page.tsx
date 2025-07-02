// SOLUCION 1: Reemplaza todo el contenido de src/app/page.tsx

'use client';

import React, { useState } from 'react';
import { Search, MapPin, MessageCircle, Instagram, Star, Heart } from 'lucide-react';

// Datos directamente en el componente (solución rápida)
const productoresData = [
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

const categorias = [
  { id: 'todos', nombre: 'Todos', icon: '🏪', color: 'bg-gray-100' },
  { id: 'vinos', nombre: 'Vinos', icon: '🍷', color: 'bg-red-100' },
  { id: 'alimentos', nombre: 'Alimentos', icon: '🧀', color: 'bg-yellow-100' },
  { id: 'artesanias', nombre: 'Artesanías', icon: '🧵', color: 'bg-blue-100' },
  { id: 'lacteos', nombre: 'Lácteos', icon: '🥛', color: 'bg-green-100' },
  { id: 'agropecuarios', nombre: 'Agropecuarios', icon: '🌾', color: 'bg-orange-100' },
  { id: 'gastronomia', nombre: 'Gastronomía', icon: '🍽️', color: 'bg-purple-100' }
];

export default function ProductoresRioja() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [productorSeleccionado, setProductorSeleccionado] = useState<any>(null);
  const [productoModal, setProductoModal] = useState<any>(null);

  // Filtrar productores
  const productoresFiltrados = productoresData.filter(productor => {
    const matchCategoria = categoriaSeleccionada === 'todos' || productor.categoria === categoriaSeleccionada;
    const matchBusqueda = productor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                         productor.ubicacion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const abrirWhatsApp = (whatsapp: string, nombre: string) => {
    const mensaje = `Hola! Me interesa conocer más sobre los productos de ${nombre}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const ProductorCard = ({ productor }: { productor: any }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img src={productor.imagen} alt={productor.nombre} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {categorias.find(cat => cat.id === productor.categoria)?.icon} {categorias.find(cat => cat.id === productor.categoria)?.nombre}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{productor.nombre}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{productor.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{productor.ubicacion}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{productor.descripcion}</p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setProductorSeleccionado(productor)}
            className="text-red-600 font-semibold hover:text-red-700 flex items-center"
          >
            Ver productos →
          </button>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => abrirWhatsApp(productor.whatsapp, productor.nombre)}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition-colors">
              <Instagram className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductoModal = ({ producto, onClose }: { producto: any, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="relative">
          <img src={producto.imagen} alt={producto.nombre} className="w-full h-64 object-cover rounded-t-xl" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
          {producto.precio && (
            <div className="text-2xl font-bold text-red-600 mb-4">{producto.precio}</div>
          )}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {producto.disponible ? 'Disponible' : 'No disponible'}
            </span>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (productorSeleccionado) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header del productor */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button 
              onClick={() => setProductorSeleccionado(null)}
              className="text-red-600 hover:text-red-700 mb-4 flex items-center"
            >
              ← Volver al catálogo
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src={productorSeleccionado.imagen} 
                alt={productorSeleccionado.nombre}
                className="w-full md:w-48 h-48 object-cover rounded-xl"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-800">{productorSeleccionado.nombre}</h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-lg text-gray-600 ml-1">{productorSeleccionado.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{productorSeleccionado.ubicacion}, La Rioja</span>
                </div>
                
                <p className="text-gray-700 mb-6">{productorSeleccionado.descripcion}</p>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => abrirWhatsApp(productorSeleccionado.whatsapp, productorSeleccionado.nombre)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </button>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productorSeleccionado.productos.map((producto: any) => (
              <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setProductoModal(producto)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>
                  {producto.precio && (
                    <div className="text-xl font-bold text-red-600 mb-2">{producto.precio}</div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {producto.disponible ? 'Disponible' : 'No disponible'}
                    </span>
                    <button 
                      onClick={() => setProductoModal(producto)}
                      className="text-red-600 hover:text-red-700 font-semibold"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {productoModal && (
          <ProductoModal 
            producto={productoModal} 
            onClose={() => setProductoModal(null)} 
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Productores de La Rioja
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Descubrí los mejores productos artesanales de nuestra provincia
            </p>
            
            {/* Búsqueda */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar productores o ubicación..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categorías */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaSeleccionada(categoria.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoriaSeleccionada === categoria.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{categoria.icon}</span>
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {productoresFiltrados.length} productores encontrados
          </h2>
        </div>

        {/* Grid de productores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productoresFiltrados.map(productor => (
            <ProductorCard key={productor.id} productor={productor} />
          ))}
        </div>

        {productoresFiltrados.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productores</h3>
            <p className="text-gray-600">Intenta con otros términos de búsqueda o cambia la categoría</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Productores La Rioja</h3>
              <p className="text-gray-300">
                Conectando productores locales con consumidores de toda la provincia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-300">Email: info@productoresrioja.com</p>
              <p className="text-gray-300">Tel: (3822) 123-456</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:text-white">Facebook</button>
                <button className="text-gray-300 hover:text-white">Instagram</button>
                <button className="text-gray-300 hover:text-white">WhatsApp</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Productores La Rioja. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <button 
        onClick={() => abrirWhatsApp('5493822123456', 'Productores La Rioja')}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}