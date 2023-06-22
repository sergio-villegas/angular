import { Component } from '@angular/core';
import { EmpleadoListComponent } from "../components/empleado-list/empleado-list.component";

export class RfcGenerador {
  vocales = ['A','E','I','O','U']
  

  calcularrfc(Nombre_completo: string, Apellido_paterno: string, Apellido_materno: string, fechanac: string): string {
    const formatoapellidos = this.fappellidos(Apellido_paterno, Apellido_materno);
    const formatonombre = this.fnombre(Nombre_completo);
    const formatofecha = this.ffecha(fechanac);

    const rfc = formatoapellidos + formatonombre + formatofecha;
    const homoclave = this.calcularHomoclave();

    return rfc + homoclave;
  }

  fappellidos(Apellido_paterno: string, Apellido_materno: string): string {
    // primera letra del primer apellido
    let formatoapellidos = Apellido_paterno.substr(0, 1);
    // primera vocal del primer apellido
    const vocal = this.tomarVocal(Apellido_paterno);
    if (vocal > 1) {
      formatoapellidos += Apellido_paterno.substr(vocal, 1);
    } else {
      formatoapellidos += Apellido_paterno.substr(1, 1);
    }
    // primera letra del segundo apellido
    formatoapellidos += Apellido_materno.substr(0, 1);

    return formatoapellidos;
  }

  fnombre(Nombre_completo: string): string {
    // primera letra del nombre
    let formatonombre = Nombre_completo.substr(0, 1);
    return formatonombre;
  }

  ffecha(fechanac: string): string {
    // últimos dos dígitos del año de nacimiento
    const anio = fechanac.substring(8,10);
    // mes de nacimiento en dos dígitos
    const mes = fechanac.substring(3,5);
    // día de nacimiento en dos dígitos
    const dia = fechanac.substring(0,2);

    return anio + mes + dia;
  }

  tomarVocal(letra: string): number {
    for (let i = 1; i < letra.length; i++) {
      if (this.vocales.indexOf(letra.charAt(i).toUpperCase()) !== -1) {
        return i;
      }
    }
    return -1;
  }

  calcularHomoclave(): string{
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const letra = letras.charAt(Math.floor(Math.random()*letras.length));
    const result = num1.toString() + letra + num2.toString();
    return result;
  }
}
