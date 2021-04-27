import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <!--<p><small>{{1+1}}</small></p>-->

        <!--V1
        <button (click)="numero = numero + 1;">+1</button>
        <span>{{ numero }}</span>
        <button (click)="numero = numero - 1;">-1</button>-->

        <!--V2
        <button (click)="sumar()">+1</button>
        <span>{{ numero }}</span>
        <button (click)="restar()">-1</button>-->

        <h3>La base es <strong>{{base}}</strong></h3>

        <!--V3-->
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    acumular(valor:number){
        this.numero += valor;
    }

    sumar(){
        this.numero += 1;
    }

    restar(){
        this.numero -= 1;
    }
}