import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Broma } from '../broma';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'compAddBroma',
  templateUrl: './add-broma.component.html',
  styleUrls: ['./add-broma.component.css']
})
export class AddBromaComponent implements OnInit {
  @Output() emitirBroma = new EventEmitter<Broma>();

  addBromaForm:FormGroup
  constructor() { 
    this.addBromaForm = new FormGroup({
      pregunta:new FormControl('',[Validators.required,Validators.minLength(6)]),
      respuesta:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  addBroma(pregunta:string, respuesta:string){
    this.emitirBroma.emit(new Broma(pregunta,respuesta))
    
  }

}
