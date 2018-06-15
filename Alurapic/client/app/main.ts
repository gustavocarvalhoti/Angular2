import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

/*Carrega o primeiro modula da app*/
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);