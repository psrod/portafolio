import { ProductosService } from '../services/productos.service';

export interface Producto {
    categoria: string;
    cod: string;
    titulo: string;
    url: string;
  }