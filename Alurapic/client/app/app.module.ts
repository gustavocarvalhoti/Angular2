import {NgModule} from '@angular/core';
/*Para rodar no navegador*/
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [/*Modules*/
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [/*Exclusivo dessa app*/
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],
    bootstrap: [AppComponent], /*Primeiro a ser carregado*/
})
export class AppModule {
}