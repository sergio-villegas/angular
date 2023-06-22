import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.scss']
})
export class CrearCitasComponent {
  nombre: string = "";
  fecha: string = "";
  hora: string = "";
  sintomas: string = "";

  formularioIncorrecto: boolean = false;
  
  @Output() nuevaCita = new EventEmitter<any>();

  constructor()
  {
    
  }

  agregarCita()
  {
    if(this.nombre=='' || this.fecha=='' || this.hora=='' || this.sintomas=='')
    {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    const CITA =
    {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }
  resetCampos()
  {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
