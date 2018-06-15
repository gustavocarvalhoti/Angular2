import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

/*Array vazio do tipo Routes, classificando as rotas*/
const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', component: ListagemComponent}, /*Famoso else*/
];

// Compilação das rotas pronto para ser usado
export const routing = RouterModule.forRoot(appRoutes);