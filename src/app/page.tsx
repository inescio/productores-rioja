'use client';

import React, { useState } from 'react';
import { Search, MapPin, MessageCircle, Instagram, Star, Heart, Grape, Mountain } from 'lucide-react';
import { productoresData, categorias } from '../data/productores';
import { Productor, Producto, Categoria } from '../types';

export default function ProductoresRioja() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [productorSeleccionado, setProductorSeleccionado] = useState<Productor | null>(null);
  const [productoModal, setProductoModal] = useState<Producto | null>(null);

  // Filtrar productores
  const productoresFiltrados = (productoresData || []).filter(productor => {
    const matchCategoria = categoriaSeleccionada === 'todos' || productor.categoria === categoriaSeleccionada;
    const matchBusqueda = productor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                         productor.ubicacion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const abrirWhatsApp = (whatsapp: string, nombre: string) => {
    const mensaje = `Hola! Me interesa conocer más sobre los productos de ${nombre} en La Rioja`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const ProductorCard = ({ productor, esDestacado = false }: { productor: Productor, esDestacado?: boolean }) => {
    const colores = [
      'from-red-600 to-orange-500',
      'from-orange-500 to-red-500', 
      'from-yellow-500 to-orange-500',
      'from-red-500 to-orange-600'
    ];
    const colorAleatorio = colores[productor.id % colores.length];

    if (esDestacado) {
      return (
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="relative h-80">
            <div className={`absolute inset-0 bg-gradient-to-br ${colorAleatorio} opacity-90`}></div>
            <div className="absolute top-6 right-6 bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm">
              <Heart className="w-6 h-6 text-white hover:text-red-200 cursor-pointer transition-colors" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">
                {categorias.find(cat => cat.id === productor.categoria)?.icon} 
                <span className="ml-1">{categorias.find(cat => cat.id === productor.categoria)?.nombre}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{productor.nombre}</h3>
              <p className="text-red-100 text-sm mb-4 line-clamp-2">
                {productor.descripcion}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{productor.ubicacion}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="ml-1 text-sm">{productor.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setProductorSeleccionado(productor)}
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Ver productos →
              </button>
              <div className="flex space-x-2">
                <button 
                  onClick={() => abrirWhatsApp(productor.whatsapp, productor.nombre)}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white p-2 rounded-xl transition-all shadow-lg">
                  <Instagram className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48">
          <div className={`absolute inset-0 bg-gradient-to-br ${colorAleatorio} opacity-80`}></div>
          <div className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-white hover:text-red-200 cursor-pointer transition-colors" />
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {categorias.find(cat => cat.id === productor.categoria)?.icon} {categorias.find(cat => cat.id === productor.categoria)?.nombre}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-800">{productor.nombre}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{productor.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 mb-3 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{productor.ubicacion}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{productor.descripcion}</p>
          
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setProductorSeleccionado(productor)}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Ver productos →
            </button>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => abrirWhatsApp(productor.whatsapp, productor.nombre)}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white p-2 rounded-xl transition-all">
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProductoModal = ({ producto, onClose }: { producto: Producto, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        <div className="relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            width={448}
            height={256}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{producto.nombre}</h3>
          {producto.descripcion && (
            <p className="text-gray-600 text-sm mb-4">{producto.descripcion}</p>
          )}
          {producto.precio && (
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">${producto.precio}</div>
          )}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {producto.disponible ? 'Disponible' : 'No disponible'}
            </span>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg transition-all shadow-lg">
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (productorSeleccionado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        {/* Header del productor */}
        <div className="bg-white shadow-lg border-b border-red-100">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button 
              onClick={() => setProductorSeleccionado(null)}
              className="text-red-600 hover:text-red-700 mb-4 flex items-center font-medium transition-colors"
            >
              ← Volver al catálogo
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={productorSeleccionado.imagen} 
                alt={productorSeleccionado.nombre}
                width={192}
                height={192}
                className="w-full md:w-48 h-48 object-cover rounded-2xl shadow-lg"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">{productorSeleccionado.nombre}</h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="text-lg text-gray-600 ml-1">{productorSeleccionado.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-red-500" />
                  <span>{productorSeleccionado.ubicacion}, La Rioja</span>
                </div>
                
                <p className="text-gray-700 mb-6">{productorSeleccionado.descripcion}</p>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => abrirWhatsApp(productorSeleccionado.whatsapp, productorSeleccionado.nombre)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center shadow-lg transition-all"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </button>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-xl flex items-center shadow-lg transition-all">
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
              <div key={producto.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-red-100">
                <img
                  src={producto.imagen} 
                  alt={producto.nombre}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setProductoModal(producto)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{producto.nombre}</h3>
                  {producto.precio && (
                    <div className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">${producto.precio}</div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {producto.disponible ? 'Disponible' : 'No disponible'}
                    </span>
                    <button 
                      onClick={() => setProductoModal(producto)}
                      className="text-red-600 hover:text-red-700 font-semibold transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header Auténtico Riojano */}
      <header className="relative bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white overflow-hidden">
        {/* Patrón de montañas */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M0,200 L0,100 L200,40 L400,80 L600,20 L800,60 L1000,30 L1200,70 L1200,200 Z" fill="currentColor"/>
            <path d="M0,200 L0,130 L150,90 L300,110 L450,70 L650,100 L850,60 L1050,90 L1200,80 L1200,200 Z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          {/* Logo y branding auténtico */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Grape className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Productores de La Rioja</h1>
                <p className="text-red-100">Tierra de tradición y sabores auténticos</p>
              </div>
            </div>
            
            {/* Badge regional auténtico */}
            <div className="hidden md:flex items-center bg-white bg-opacity-15 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mountain className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Sierras Riojanas</span>
            </div>
          </div>

          {/* Título principal con tipografía más auténtica */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Sabores que cuentan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                nuestra historia
              </span>
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Conectamos familias productoras con tu mesa. 
              Productos artesanales del corazón de Argentina.
            </p>
          </div>

          {/* Buscador mejorado */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productores, sabores..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white bg-opacity-95 backdrop-blur-sm text-gray-800 placeholder-gray-500 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categorías con diseño más orgánico */}
      <div className="bg-white shadow-lg sticky top-0 z-20 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex overflow-x-auto space-x-3 pb-2">
            {categorias.map((categoria: Categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaSeleccionada(categoria.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl text-sm font-medium transition-all transform hover:scale-105 ${
                  categoriaSeleccionada === categoria.id
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:shadow-md hover:bg-red-50'
                }`}
              >
                <span className="mr-2">{categoria.icon}</span>
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de productores con diseño más variado */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Familias productoras riojanas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada producto cuenta una historia. Conocé a las familias que mantienen vivas 
            las tradiciones de nuestra tierra colorada.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold text-gray-800">
            {productoresFiltrados.length} productores encontrados
          </h4>
        </div>

        {/* Grid asimétrico más orgánico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productoresFiltrados.map((productor: Productor, index: number) => (
            <ProductorCard 
              key={productor.id} 
              productor={productor} 
              esDestacado={index === 0}
            />
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

      {/* Footer más auténtico */}
      <footer className="bg-gradient-to-r from-red-900 via-red-800 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                <Grape className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Productores de La Rioja</h3>
            </div>
            <p className="text-red-100 max-w-2xl mx-auto">
              Conectando el sabor auténtico de La Rioja con tu mesa. 
              Apoyamos a las familias productoras que mantienen viva nuestra tradición.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-4 text-yellow-200">Contacto</h4>
              <p className="text-red-100">hola@productoresrioja.com</p>
              <p className="text-red-100">Tel: (3822) 123-456</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-200">Ubicación</h4>
              <p className="text-red-100">La Rioja, Argentina</p>
              <p className="text-red-100">Tierra del Sol y del Vino</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-200">Síguenos</h4>
              <div className="flex justify-center space-x-4">
                <button className="text-red-100 hover:text-white transition-colors">Facebook</button>
                <button className="text-red-100 hover:text-white transition-colors">Instagram</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-700 mt-12 pt-8 text-center text-red-200">
            <p>&copy; 2025 Productores de La Rioja. Hecho con ❤️ en Argentina.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <button 
        onClick={() => abrirWhatsApp('5493822123456', 'Productores La Rioja')}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}'use client';

import React, { useState } from 'react';
import { Search, MapPin, MessageCircle, Instagram, Star, Heart, Sun, Mountain } from 'lucide-react';
import { productoresData, categorias } from '../data/productores';
import { Productor, Producto, Categoria } from '../types';

export default function ProductoresCatamarca() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [productorSeleccionado, setProductorSeleccionado] = useState<Productor | null>(null);
  const [productoModal, setProductoModal] = useState<Producto | null>(null);

  // Filtrar productores
  const productoresFiltrados = (productoresData || []).filter(productor => {
    const matchCategoria = categoriaSeleccionada === 'todos' || productor.categoria === categoriaSeleccionada;
    const matchBusqueda = productor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                         productor.ubicacion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const abrirWhatsApp = (whatsapp: string, nombre: string) => {
    const mensaje = `Hola! Me interesa conocer más sobre los productos de ${nombre} en Catamarca`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const ProductorCard = ({ productor }: { productor: Productor }) => (
    <div className="bg-white rounded-xl shadow-catamarca overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100">
      <div className="relative">
        <img
          src={productor.imagen}
          alt={productor.nombre}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-catamarca">
          <Heart className="h-5 w-5 text-gray-400 hover:text-accent-500 cursor-pointer transition-colors" />
        </div>
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-3 py-1 rounded-full text-sm">
          {categorias.find(cat => cat.id === productor.categoria)?.icon} {categorias.find((cat: Categoria) => cat.id === productor.categoria)?.nombre}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{productor.nombre}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-secondary-500 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{productor.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1 text-primary-500" />
          <span className="text-sm">{productor.ubicacion}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{productor.descripcion}</p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setProductorSeleccionado(productor)}
            className="text-primary-600 font-semibold hover:text-primary-700 flex items-center transition-colors"
          >
            Ver productos →
          </button>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => abrirWhatsApp(productor.whatsapp, productor.nombre)}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-2 rounded-full transition-all shadow-lg">
              <Instagram className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductoModal = ({ producto, onClose }: { producto: Producto, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
        <div className="relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            width={448}
            height={256}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-catamarca hover:bg-gray-50 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{producto.nombre}</h3>
          {producto.descripcion && (
            <p className="text-gray-600 text-sm mb-4">{producto.descripcion}</p>
          )}
          {producto.precio && (
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-4">${producto.precio}</div>
          )}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {producto.disponible ? 'Disponible' : 'No disponible'}
            </span>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg transition-all shadow-lg">
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (productorSeleccionado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        {/* Header del productor */}
        <div className="bg-white shadow-catamarca border-b border-primary-100">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button 
              onClick={() => setProductorSeleccionado(null)}
              className="text-primary-600 hover:text-primary-700 mb-4 flex items-center font-medium transition-colors"
            >
              ← Volver al catálogo
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={productorSeleccionado.imagen} 
                alt={productorSeleccionado.nombre}
                width={192}
                height={192}
                className="w-full md:w-48 h-48 object-cover rounded-xl shadow-catamarca"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{productorSeleccionado.nombre}</h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-secondary-500 fill-current" />
                    <span className="text-lg text-gray-600 ml-1">{productorSeleccionado.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{productorSeleccionado.ubicacion}, Catamarca</span>
                </div>
                
                <p className="text-gray-700 mb-6">{productorSeleccionado.descripcion}</p>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => abrirWhatsApp(productorSeleccionado.whatsapp, productorSeleccionado.nombre)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg flex items-center shadow-lg transition-all"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </button>
                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center shadow-lg transition-all">
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
              <div key={producto.id} className="bg-white rounded-xl shadow-catamarca overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary-100">
                <img
                  src={producto.imagen} 
                  alt={producto.nombre}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setProductoModal(producto)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{producto.nombre}</h3>
                  {producto.precio && (
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-2">${producto.precio}</div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${producto.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {producto.disponible ? 'Disponible' : 'No disponible'}
                    </span>
                    <button 
                      onClick={() => setProductoModal(producto)}
                      className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-gradient-catamarca text-white shadow-catamarca relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-8 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0 mb-4 md:mb-6">
            
            {/* Badge de ubicación */}
            <div className="flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium md:order-2">
              <Mountain className="h-4 w-4 mr-2" />
              Valle Central y Puna
              <Sun className="h-4 w-4 ml-2" />
            </div>
            
            {/* Título principal */}
            <div className="flex-1 text-center md:text-left md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Productores de 
                <span className="bg-gradient-to-r from-secondary-300 to-white bg-clip-text text-transparent">
                  {" "}Catamarca
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100">
                Descubrí los mejores productos de la tierra del sol y la tradición andina
              </p>
            </div>
          </div>
          
          {/* Búsqueda centrada */}
          <div className="max-w-sm sm:max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-lg p-0.5">
              <div className="bg-white rounded-lg h-full"></div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <input
                type="text"
                placeholder="Buscar productores o ubicación..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="relative w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categorías */}
      <div className="bg-white shadow-catamarca sticky top-0 z-10 border-b border-primary-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categorias.map((categoria: Categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaSeleccionada(categoria.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoriaSeleccionada === categoria.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-catamarca'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Productores Catamarca</h3>
              </div>
              <p className="text-gray-300">
                Conectando productores locales de toda la provincia del sol con consumidores de Argentina.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-300">Email: info@productorescatamarca.com</p>
              <p className="text-gray-300">Tel: (3833) 123-456</p>
              <p className="text-gray-300">Valle Central y Puna</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:text-white transition-colors">Facebook</button>
                <button className="text-gray-300 hover:text-white transition-colors">Instagram</button>
                <button className="text-gray-300 hover:text-white transition-colors">WhatsApp</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Productores Catamarca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <button 
        onClick={() => abrirWhatsApp('5493833123456', 'Productores Catamarca')}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-catamarca transition-all duration-300 z-50 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}