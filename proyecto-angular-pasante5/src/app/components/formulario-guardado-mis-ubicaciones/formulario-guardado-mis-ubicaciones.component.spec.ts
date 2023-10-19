import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGuardadoMisUbicacionesComponent } from './formulario-guardado-mis-ubicaciones.component';
import { FormsModule } from '@angular/forms';
import { MapaComponent } from '../mapa/mapa.component';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from 'src/app/app.routes';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('FormularioGuardadoMisUbicacionesComponent', () => {
  let component: FormularioGuardadoMisUbicacionesComponent;
  let fixture: ComponentFixture<FormularioGuardadoMisUbicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGuardadoMisUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('eliminar lugar de lista de lugares', () => {
    expect(component).toBeTruthy();
    component.lugares=[{nombreLugar:"lugar 1",descripcion:"descripcion",coordenadas:['-18.9120921','-17.89328392832']}];
    component.eliminarElemento(0);
    expect(component.lugares).toEqual([]);
  });
});
