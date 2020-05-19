import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;

  productos: Producto [] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos() {

    this.http.get('https://angular-html-5131d.firebaseio.com/productos_idx.json')
      .subscribe( (resp2: Producto []) => {

          console.log(resp2);
          this.productos = (resp2);
          this.cargando = false;

      });

  }
  
}
