import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoieWRuYW5pczIwMTIiLCJhIjoiY2xkYWhjMzJ6MGd4ODN3czkwcjVsYWpteCJ9.ngMlR8_SBEb8wngH7cdVOA';

if(!navigator.geolocation){
  alert('ERROR')
  throw new Error('Navegador no soporta la Geolocation')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
