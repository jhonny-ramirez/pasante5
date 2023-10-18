import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { MapaComponent } from './components/mapa/mapa.component';
import { FormularioGuardadoMisUbicacionesComponent } from './components/formulario-guardado-mis-ubicaciones/formulario-guardado-mis-ubicaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    FormularioGuardadoMisUbicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
