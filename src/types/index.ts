export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio?: string; // Opcional, ya que no todos los productos lo tienen
  disponible: boolean;
}

export interface Productor {
  id: number;
  nombre: string;
  categoria: string; // Podría ser un tipo más específico si las categorías son fijas
  ubicacion: string;
  telefono: string;
  whatsapp: string;
  instagram: string;
  descripcion: string;
  imagen: string;
  rating: number;
  productos: Producto[];
}

export interface Categoria {
  id: string;
  nombre: string;
  icon: string;
  color: string;
}
