import {Component} from '@angular/core';

/*Decorator - TypeScript da Microsoft (Linguagem que tem o transcompilador para ES6)*/
@Component({
    moduleId: module.id, /*Para trabalhar melhor com os paths, produra na pasta relativa*/
    selector: 'app', /*Nome do componente*/
    templateUrl: './app.component.html',
})
export class AppComponent {
}