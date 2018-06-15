import {NgModule} from '@angular/core';
import {PainelComponent} from './painel.component';

@NgModule({
    declarations: [PainelComponent],
    exports: [PainelComponent], /*Para ser usado por outros modules*/
})
export class PainelModule {
}