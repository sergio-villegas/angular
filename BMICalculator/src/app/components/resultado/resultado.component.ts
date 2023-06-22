import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {
  bmi: number = 0;
  resultado: string="";
  interpretacion: string="";

  constructor(private route: ActivatedRoute){
    this.bmi=+route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void{
    this.getResultado();
  }

  getResultado(){
    if(this.bmi>=25){
      this.resultado='Exceso de peso';
      this.interpretacion='Tienes un peso superior al normal. Intente hacer más ejercicio';
    } else if(this.bmi>=18.5){
      this.resultado='Normal';
      this.interpretacion='Tienes un peso corporal normal. ¡Buen trabajo!';
    }
  }

}
