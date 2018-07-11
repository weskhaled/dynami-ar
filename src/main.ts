import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import * as $ from 'jquery' ;
import * as $ from 'jquery';
// import * as Waypoint from '../node_modules/waypoints/src/waypoint.js';
import * as Waypoint from 'waypoints';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
