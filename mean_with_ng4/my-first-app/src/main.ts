// All these are script files... they will be loaded and injected inside index page
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //imports app.module.ts file here
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// The above line helps bootstrap the app using the AppModule files. look at app.module.ts 
