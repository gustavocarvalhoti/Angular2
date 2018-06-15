import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {Headers, Http} from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    http: Http;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    /*
    Eu alterei o imput, ai não precisa mais disso
    constructor() {
        this.foto.url = "";
        this.foto.titulo = "";
        this.foto.descricao = "";
    }
    */

    constructor(http: Http, fb: FormBuilder) {
        this.http = http;
        this.meuForm = fb.group({
            titulo: [
                '',
                Validators.compose(
                    [
                        Validators.required,
                        Validators.minLength(4)
                    ]
                )
            ],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        /*$event: para fazer o load só do form*/
        event.preventDefault();
        console.log(this.foto);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        /*Enviar como JSON*/
        this.http
            .post(
                'v1/fotos',
                JSON.stringify(this.foto),
                {headers: headers}
            )
            .subscribe(() => {
                console.log('Cadastrado com sucesso!');
                this.foto = new FotoComponent();
            }, erro => console.log("Deu erro! " + erro));
    }
}