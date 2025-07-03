'use client';

import React, { useState } from 'react';
import { Search, MapPin, MessageCircle, Instagram, Star, Heart } from 'lucide-react';
import { productoresData, categorias } from '../data/productores';
import { Productor, Producto, Categoria } from '../types';

export default function ProductoresRioja() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [productorSeleccionado, setProductorSeleccionado] = useState<Productor | null>(null);
  const [productoModal, setProductoModal] = useState<Producto | null>(null);

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

  const ProductorCard = ({ productor }: { productor: Productor }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={productor.imagen}
          alt={productor.nombre}
          width={400}
          height={192} // h-48 = 192px
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {categorias.find(cat => cat.id === productor.categoria)?.icon} {categorias.find((cat: Categoria) => cat.id === productor.categoria)?.nombre}
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

  const ProductoModal = ({ producto, onClose }: { producto: Producto, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            width={448} // max-w-md ( Tailwind ) roughly, h-64 = 256px
            height={256}
            className="w-full h-64 object-cover rounded-t-xl"
          />
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
                width={192} // w-48 = 192px, h-48 = 192px
                height={192}
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
            {productorSeleccionado.productos.map((producto: Producto) => (
              <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={producto.imagen} 
                  alt={producto.nombre}
                  width={300} // Asumiendo que las imagenes de producto son 300 de ancho como en los datos originales
                  height={192} // h-48 = 192px
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
    <div className="flex items-center justify-between mb-6">
      {/* Título principal */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Productores de La Rioja
        </h1>
        <p className="text-xl text-red-100">
          Descubrí los mejores productos artesanales de nuestra provincia
        </p>
      </div>
      
      {/* Logo de La Rioja */}
      <div className="flex-shrink-0 ml-8">
        <img 
          src="/logo-la-rioja.png" 
          alt="Logo La Rioja Argentina" 
          className="h-16 md:h-20 lg:h-24 w-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
    
    {/* Búsqueda centrada */}
<div className="max-w-md mx-auto relative">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-0.5">
    <div className="bg-white rounded-lg h-full"></div>
  </div>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
    <input
      type="text"
      placeholder="Buscar productores o ubicación..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="relative w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white bg-white"
    />
  </div>
</div>

  </div>
</header>

      {/* Categorías */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categorias.map((categoria: Categoria) => (
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
          {productoresFiltrados.map((productor: Productor) => (
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
              <p className="text-gray-300">Tel: (3804) 123-456</p>
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