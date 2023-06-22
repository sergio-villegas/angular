import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  nombre: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  fechaNacimiento: string = "";
  RFC: string = "";

  generarRFC() {
    // Variables y constantes a utilizar
    // Vocales para el paso dos de RFC
    enum vocales { 'A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u' }
    const nombre = this.nombre.toUpperCase()
    const apellidoPaterno = this.apellidoPaterno.toUpperCase()
    const apellidoMaterno = this.apellidoMaterno.toUpperCase()
    // Arreglo con [año, mes, dia]
    const fechaSplitted = this.fechaNacimiento.split("-")
    /*
    Tablas
    */
    // Valores que se asignan a cada letra del nombre
    const tablaNumerosClaveDiferenciadoraHomonomia: Record<string, string> = {
      ' ': '00', '0': '00', '1': '01', '2': '02', '3': '03', '4': '04', '5': '05', '6': '06', '7': '07', '8': '08',
      '9': '09', 'Ñ': '10', 'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15', 'F': '16', 'G': '17', 'H': '18',
      'I': '19', 'J': '21', 'K': '22', 'L': '23', 'M': '24', 'N': '25', 'O': '26', 'P': '27', 'Q': '28', 'R': '29',
      'S': '32', 'T': '33', 'U': '34', 'V': '35', 'W': '36', 'X': '37', 'Y': '38', 'Z': '39'
    }

    // Valores que se asignan a la clave diferenciadora de homonomia, con base en el cociente y el residuo
    const valoresClaveDiferenciadoraCocienteResiduo: Record<string, string> = {
      '0': '1', '1': '2', '2': '3', '3': '4', '4': '5', '5': '6', '6': '7', '7': '8', '8': '9', '9': 'A', '10': 'B',
      '11': 'C', '12': 'D', '13': 'E', '14': 'F', '15': 'G', '16': 'H', '17': 'I', '18': 'J', '19': 'K', '20': 'L',
      '21': 'M', '22': 'N', '23': 'P', '24': 'Q', '25': 'R', '26': 'S', '27': 'T', '28': 'U', '29': 'V', '30': 'W',
      '31': 'X', '32': 'Y', '33': 'Z'
    }

    // Valores que se asignan al RFC para el digito diferenciador
    const rfcDigitoDiferenciador: Record<string, number> = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10,
      'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19, 'K': 20,
      'L': 21, 'M': 22, 'N': 23, 'Ñ': 24, 'O': 25, 'P': 26, 'Q': 27, 'R': 28, 'S': 29, 'T': 30,
      'U': 31, 'V': 32, 'W': 33, 'X': 34, 'Y': 35, 'Z': 36, ' ': 37
    }

    // Primera letra del apellido paterno
    this.RFC = apellidoPaterno[0]

    // Primera vocal el apellido paterno
    for (let i = 1; i < apellidoPaterno.length; i++) {
      if (apellidoPaterno[i] in vocales) {
        this.RFC += apellidoPaterno[i]
        break;
      }
    }

    // Primera letra del apellido materno
    if (apellidoMaterno != '') {
      this.RFC += apellidoMaterno[0]
    }
    // Si no tiene apellido materno
    else {
      this.RFC += nombre[0] + nombre[1]
    }

    // Primer letra del nombre
    if (this.RFC.length != 4) {
      this.RFC += nombre[0]
    }

    // Ultimas dos cifras del año
    this.RFC += fechaSplitted[0].substring(2, 4)

    // Mes en formato de numero
    this.RFC += fechaSplitted[1]

    // Dia en formato de numero
    this.RFC += fechaSplitted[2]

    // Conjuntamos el nombre empezando por apellido
    if (apellidoMaterno == '') {
      var nombreCompleto = apellidoPaterno + " " + nombre
    }
    else {
      var nombreCompleto = apellidoPaterno + " " + apellidoMaterno + " " + nombre
    }

    // Creamos un string para concatenar los numeros en relacion a la tabla se inicia 
    // con un 0 para hacer la sumatoria de pares
    var numberStringAssociated: string = '0'

    // Asociamos cada caracter del nombre con el numero ubicado en tablaNumerosClaveDiferenciadoraHomonomia
    for (let i = 0; i < nombreCompleto.length; i++) {
      numberStringAssociated += tablaNumerosClaveDiferenciadoraHomonomia[nombreCompleto[i]]
    }

    // Sumamos la multiplicacion del par [12] con su segundo digito [2] = 24
    var suma: number = 0

    // Recorre numberStringAssociated para hacer la sumatoria de pares
    for (let i = 0; i < numberStringAssociated.length - 1; i++) {
      // par = par de numeros a multiplicar
      var par = numberStringAssociated[i] + numberStringAssociated[i + 1]
      // segundo digito del par anterior
      var multiplo = numberStringAssociated[i + 1]
      // Si es [00] * [0] no esta definido, por ende se omite
      if (par !== '00' || multiplo !== '0') {
        // Se suma en (suma) la multiplicacion del par con el multiplo
        suma += Number(par) * Number(multiplo)
      }
    }

    // De la suma total se toman los 3 ultimos digitos
    var dividendo: Number = Number(String(suma).substring(1, 4))

    // Se divide entre 34
    var cociente: Number = Math.floor(Number(dividendo) / 34)
    var residuo: Number = Number(dividendo) % 34

    // Se asigna el primer valor en base al valor del cociente
    this.RFC += valoresClaveDiferenciadoraCocienteResiduo[String(cociente)]

    // Se asigna el segundo valor en base al residuo
    this.RFC += valoresClaveDiferenciadoraCocienteResiduo[String(residuo)]

    // Arreglo donde se relaciona cada digito del RFC con el rfcDigitoDiferenciador
    var numeroRfcArray: number[] = []

    // Asociamos cada caracter del RFC con el numero ubicado en rfcDigitoDiferenciador
    for (let i = 0; i < this.RFC.length; i++) {
      numeroRfcArray.push(rfcDigitoDiferenciador[this.RFC[i]])
    }

    suma = 0
    var j: number = 0
    // Multiplicamos el numeor en numeroRfcArray * i-1 desde 13 y lo sumamos
    for (let i = this.RFC.length + 1; i > 1; i--) {
      // Sumamos la multiplicacion del RFC(number)[j] en posicion i
      suma += Number(numeroRfcArray[j]) * Number(i)
      // Incrementamos para pasar a la siguiente posicion del RFC(numero)[j]
      j++
    }

    // Calculamos el residuo de la division de la suma de los multiplicados / 11
    residuo = suma % 11
    
    // Si el residuo es 0, se asigna 0 como ultimo digito del RFC
    if(residuo == 0) {
      this.RFC += "0"
    }
    // Si el residuo es 10, se asigna A como ultimo digito del RFC
    else if(11 - Number(residuo) == 10) {
      this.RFC += "A"
    }
    // Si el residuo es mayor a 0, se resta 11 - residuo dando ese numero como digito final del RFC
    else {
      this.RFC += String(11 - Number(residuo))
    }

  }

}
