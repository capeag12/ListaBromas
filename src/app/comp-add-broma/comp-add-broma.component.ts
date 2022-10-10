import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'compAddBroma',
  templateUrl: './comp-add-broma.component.html',
  styleUrls: ['./comp-add-broma.component.css']
})
export class CompAddBromaComponent implements OnInit {
  @Output() eventoCrearBroma = new EventEmitter<Broma>();
  constructor() { }

  ngOnInit(): void {
  }

  pasarBroma(pregunta:string, respuesta:string){
    this.eventoCrearBroma.emit(new Broma(pregunta,respuesta))
  }
}
