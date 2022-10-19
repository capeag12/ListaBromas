import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'compAddBroma',
  templateUrl: './add-broma.component.html',
  styleUrls: ['./add-broma.component.css']
})
export class AddBromaComponent implements OnInit {
  @Output() emitirBroma = new EventEmitter<Broma>();
  constructor() { }

  ngOnInit(): void {
  }

  addBroma(pregunta:string, respuesta:string){
    this.emitirBroma.emit(new Broma(pregunta,respuesta))
    
  }

}
