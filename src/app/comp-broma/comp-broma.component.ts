import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'CompBroma',
  templateUrl: './comp-broma.component.html',
  styleUrls: ['./comp-broma.component.css']
})
export class CompBromaComponent implements OnInit {
    @Input() id!:number;
    @Input() pregunta:string="";
    @Input() respuesta:string="";
    @Output() emitBorrarBroma = new EventEmitter<number>(); //El event emitter sirve para pasar eventos al padre
    
    public broma:Broma;
    constructor() {
       this.broma = new Broma(this.pregunta,this.respuesta)
       
    }

    borrarBroma(){
      this.emitBorrarBroma.emit(this.id) //Esta hecho para que emita el dato. Es basicamente una especie de return
    }

    
    
    

  ngOnInit(): void {
  }

}
