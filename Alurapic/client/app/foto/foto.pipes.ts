import {FotoComponent} from './foto.component';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    /*Recebe a lista de fotos e o digitado*/
    transform(fotos: FotoComponent[], digitado: string) {
        /*Faz o filtro*/
        return fotos.filter(
            foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase())
        );
    }
}