import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';

@NgModule({
    declarations: [
        FotoComponent,
        FiltroPorTitulo],
    exports: [/*Para ser utilizado por outros modulos*/
        FotoComponent,
        FiltroPorTitulo],
})
export class FotoModule {
}