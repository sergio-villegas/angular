import { Component, Input } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { RfcGenerador } from 'src/app/models/rfc-generador';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent {
  instancerfc = new RfcGenerador();
  listEmpleados: Empleado[] = [{
    No: 19141215,
    RFC: '',
    Nombre_completo: 'SERGIO ALEJANDRO',
    Apellido_Paterno: 'VILLEGAS',
    Apellido_Materno: 'FERRUZCA',
    Sexo: 'masculino',
    Salario: 195000,
    fechanac: '10/12/2001'
  },

  {
    No: 19141144,
    RFC: '',
    Nombre_completo: 'LUZ ZAYETZY',
    Apellido_Paterno: 'CARAY',
    Apellido_Materno: 'QUINTERO',
    Sexo: 'femenino',
    Salario: 10000,
    fechanac: '31/12/2001'
  },

  {
    No: 19141143,
    RFC: '',
    Nombre_completo: 'PAOLA VALERIA',
    Apellido_Paterno: 'FUERTES',
    Apellido_Materno: 'GOMEZ',
    Sexo: 'femenino',
    Salario: 60000,
    fechanac: '09/03/2001'
  },

  {
    No: 19141169,
    RFC: '',
    Nombre_completo: 'JESSICA MARIANA',
    Apellido_Paterno: 'MARTINEZ',
    Apellido_Materno: 'CORONILLA',
    Sexo: 'femenino',
    Salario: 25000,
    fechanac: '25/10/2000'
  },

  {
    No: 19141187,
    RFC: '',
    Nombre_completo: 'CHRISTIAN JOSUE',
    Apellido_Paterno: 'RAMIREZ',
    Apellido_Materno: 'MARTINEZ',
    Sexo: 'masculino',
    Salario: 52000,
    fechanac: '06/01/2001'
  },

  {
    No: 19141136,
    RFC: '',
    Nombre_completo: 'CESAR ADAN',
    Apellido_Paterno: 'CUEVAS',
    Apellido_Materno: 'TELLEZ',
    Sexo: 'masculino',
    Salario: 30000,
    fechanac: '15/01/2001'
  },
  ]

  constructor() { }

  ngOnInit(): void { }

  obtenerTotalEmpleados(sex: string): number {
    if (sex == 'masculino') {
      return this.listEmpleados.filter(list => list.Sexo === 'masculino').length
    }

    if (sex == 'femenino') {
      return this.listEmpleados.filter(list => list.Sexo === 'femenino').length
    }

    return this.listEmpleados.length;
  }

  radioBottonSeleccionado: string = 'empleados'; //Para que selecciones todos al inicio
  genero: any = [
    'masculino',
    'femenino',
    'empleados'
  ];
  radioChangeHandler(event: any) {
    //this.genero = event.target.value;
    this.radioBottonSeleccionado = event.target.value;
  }


  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.Sexo === 'femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.Sexo === 'masculino').length;
  }

  generarRFC(empleado: Empleado): string {
    const rfc = this.instancerfc.calcularrfc(empleado.Nombre_completo,empleado.Apellido_Paterno,
      empleado.Apellido_Materno,empleado.fechanac);
      empleado.RFC = rfc;
      return rfc;
    
  }

  getRFC(empleado: Empleado): string {
    if (empleado.RFC == '') {
      const rfc = this.generarRFC(empleado);
      return rfc.toString();
    } else {
      return empleado.RFC;
    }
  }

}
