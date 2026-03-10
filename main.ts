// <ion-content [fullscreen]="true">
// <ion-alert
// trigger="selecionar-desconto"
// header="Desconto escolhido"
// message={{descontoEscolhido}}
// [buttons]="alertButtons"
// ></ion-alert>
  
// <ion-radio-group value="desconto" [(ngModel)]="desconto">
// <ion-radio value="cinco">Credito a vista, 5% de desconto</ion-radio><br />
// <ion-radio value="sem">Credito parcelado, sem desconto</ion-radio><br />
// <ion-radio value="quinze">Pix, 15% de desconto</ion-radio><br />
// </ion-radio-group>
// <ion-button expand="block" id="selecionar-desconto"
// (click)="verificar()">Verificar</ion-button>

// <ion-input label="Valor" labelPlacement="floating"
// placeholder="Valor da compra" type="number"
// [(ngModel)]="valorCompra"></ion-input>

// </ion-content

// Exercicio 1

import { Component } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
standalone: false,
})
  
export class HomePage {
constructor() {}
linguagem='';
linguagemEscolhida='';
alertButtons = ['OK'];
verificar(){
if(this.linguagem=='c'){
this.linguagemEscolhida='C#';
}
else if(this.linguagem=='python'){
this.linguagemEscolhida='Python';
}
else if(this.linguagem=='java'){
this.linguagemEscolhida='Java';
}
else{
this.linguagemEscolhida='Cobol';
}
}
}
