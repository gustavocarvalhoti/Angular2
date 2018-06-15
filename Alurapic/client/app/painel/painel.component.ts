import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
    @Input() titulo: string;

    // Carrega depois do @Input() titulo: string;
    ngOnInit() {
        /*Limita o tamanho do titulo a 7 caracteres o máximo*/
        this.titulo = this.titulo.length > 7
            ? this.titulo.substr(0, 7) + '...'
            : this.titulo;
    }
}