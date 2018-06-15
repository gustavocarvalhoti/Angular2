import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    /*Declara um array de objetos vazio*/
    /*fotos: Array<Object> = [];*/
    fotos: Object[] = [];

    constructor(http: Http) {
        /*
        let stream = http.get('http://localhost:3000/v1/fotos');
        // Quando receber os valores do get
        stream.subscribe(res => {
            this.fotos = res.json();
            console.log(this.fotos);
        });
        */

        /*Melhor assim:*/
        http.get('http://localhost:3000/v1/fotos')
            .map(res => res.json()) /*Faz o cast de resposta para JSON*/
            .subscribe(resFotos => {
                debugger;
                this.fotos = resFotos;
            }, erro => console.log("Deu erro! " + erro));
    }
}