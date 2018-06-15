import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto', /*Nome do componente*/
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    // Recebe os parametros
    @Input() titulo;
    @Input() url;
    descricao: string;
}