import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { InfoEquipoService } from './services/info-equipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(public infoPaginaService: InfoPaginaService,
              public productosService: ProductosService,
              public infoEquipoService: InfoEquipoService) {

  }
}
