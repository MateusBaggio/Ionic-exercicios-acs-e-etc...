import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  preco='';
  resultado='';
  km='';
  combustivel='';
  litragem='';
  valorPago='';
  linguagemEscolhida='';
  aplicativo='';
  vAplicativo='';
  valorFinal ='';
  vMotorista='';
  altura='';
  quilometro='';
  alertButtons = ['OK'];
  alert = ['OK'];

  calcular(){

  this.valorFinal = (parseFloat(this.aplicativo)/(parseFloat(this.altura)*parseFloat(this.altura))).toFixed(0);


  if(this.aplicativo=='normal'){
    this.valorFinal = (5 + (2.5 * parseFloat(this.quilometro))).toFixed(2);
    }
  else if(this.aplicativo=='superior'){
   this.valorFinal = (7.50 + (3.5 * parseFloat(this.quilometro))).toFixed(2);
    }
  else{
    this.valorFinal = (10 + (5.5 * parseFloat(this.quilometro))).toFixed(2);
  }
      if (this.valorFinal <= '150'){
      this.vAplicativo = (parseFloat(this.valorFinal) * 0.20).toFixed(2);
      this.vMotorista = (parseFloat(this.valorFinal) * 0.80).toFixed(2);
    }else{
      this.vAplicativo = (parseFloat(this.valorFinal) * 0.25).toFixed(2);
      this.vMotorista = (parseFloat(this.valorFinal) * 0.75).toFixed(2);
    }

    
    if(this.combustivel=='etanol'){
      this.litragem=(parseFloat(this.km)/9).toFixed(2);
    }
    else if(this.combustivel=='gasolina'){
      this.litragem=(parseFloat(this.km)/12).toFixed(2);
    }
    else{
      this.litragem=(parseFloat(this.km)/15).toFixed(2);
    }
    this.valorPago=(parseFloat(this.litragem)*parseFloat(this.preco)).toFixed(2);

  }
}
