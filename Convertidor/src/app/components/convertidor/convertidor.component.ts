import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad: number = 0
  tengo: string = "Dolar estadounidense";
  quiero: string = "Euro";
  total: number = 0;
  // Arreglo para usarlo en el maquetado
  monedas: string[] = ['Dolar estadounidense', 'Euro', 'Libra esterlina', 'Dolar canadiense', 'Dolar australiano', 'Yen japones', 'Franco suizo', 'Rublo ruso', 'Corona sueca', 'Taka bengali']
  constructor() {

  }
  ngOnInit(): void {

  }
  convertir(): void {
    switch (this.tengo) {
      case 'Dolar estadounidense':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 0.94445;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.82867;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 1.37585;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 1.51046;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 133.105;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 0.9314;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 76.1;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 10.5953;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 105.45;
        }
        break;
      case 'Euro':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 1.05825;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.87690;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 1.45647;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 1.59884;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 140.5;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 0.985;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 80.47960;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 11.2252;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 111.508;
        }
        break;
      case 'Libra esterlina':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 1.2116;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 1.1411;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 1.66311;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 1.81936;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 161.804;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 1.1263;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 93.0163;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 12.7391;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 129.896;
        }
        break;
      case 'Dolar canadiense':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 0.72831;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 0.68611;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.60136;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 1.09457;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 97.3446;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 0.67753;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 55.9604;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 7.66436;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 78.1478;
        }
        break;
      case 'Dolar australiano':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 0.6655;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 0.627;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.54963;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 0.9134;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 88.9142;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 0.61906;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 51.1142;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 6.9998;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 71.3749;
        }
        break;
      case 'Yen japones':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 0.00749;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 0.00705;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.00618;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 0.01027;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 0.01125;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad * 0.00696;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 0.57496;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 0.07876;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 0.80292;
        }
        break;
      case 'Franco suizo':
        if (this.quiero === 'Dolar estadounidense') {
          this.total = this.cantidad * 1.0755;
        }
        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 1.01358;
        }
        if (this.quiero === 'Libra esterlina') {
          this.total = this.cantidad * 0.88815;
        }
        if (this.quiero === 'Dolar canadiense') {
          this.total = this.cantidad * 1.47602;
        }
        if (this.quiero === 'Dolar australiano') {
          this.total = this.cantidad * 1.61698;
        }
        if (this.quiero === 'Yen japones') {
          this.total = this.cantidad * 143.718;
        }
        if (this.quiero === 'Franco suizo') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'Rublo ruso') {
          this.total = this.cantidad * 82.6073;
        }
        if (this.quiero === 'Corona sueca') {
          this.total = this.cantidad * 11.3149;
        }
        if (this.quiero === 'Taka bengali') {
          this.total = this.cantidad * 115.36;
        }
        break;
    }
  }
}
