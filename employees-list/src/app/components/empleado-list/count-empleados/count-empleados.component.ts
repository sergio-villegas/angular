import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent {
  radioBottonSeleccionado: string = 'empleados'; // para que selecciones todos al inicio

  constructor() { }

  ngOnInit(): void { }
}
