import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoEquipoService {

  equipo: InfoEquipo  []= [];

  constructor(private http: HttpClient) {

    this.cargarEquipo();


  }
  
        private cargarEquipo() {

          // Leer archivo json
          this.http.get('https://angular-html-5131d.firebaseio.com/equipo.json')
          .subscribe( (resp: InfoEquipo []) => {

            this.equipo  = resp;
            
          });

        }
  } 