import { RouterModule, Routes } from "@angular/router";
import { MapaComponent } from './components/mapa/mapa.component';
import { FormularioGuardadoMisUbicacionesComponent } from './components/formulario-guardado-mis-ubicaciones/formulario-guardado-mis-ubicaciones.component';

const APP_ROUTES: Routes = [
    { path: '', component:  FormularioGuardadoMisUbicacionesComponent},

 ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});