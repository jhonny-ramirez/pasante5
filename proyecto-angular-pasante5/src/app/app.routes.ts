import { RouterModule, Routes } from "@angular/router";
import { MapaComponent } from './components/mapa/mapa.component';

const APP_ROUTES: Routes = [
    { path: '', component:  MapaComponent},

 ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});