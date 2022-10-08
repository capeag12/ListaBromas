import { Component } from '@angular/core';
import { GestionBromas } from './gestion-bromas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaBromas';
  gestionBromas = new GestionBromas();

  lista = this.gestionBromas.getListaBromas();

  bromaSeleccionada = -1;

  nuevaPreg = "";
  nuevaRes = "";

  borrarBroma(bromaSelect:number){
    this.gestionBromas.eliminarBroma(bromaSelect)
    console.log(this.gestionBromas.getListaBromas())
  }

  addBroma(pregunta:string, respuesta:string){
    this.gestionBromas.añadirPregunta(pregunta,respuesta)
    
  }

  

  
}
