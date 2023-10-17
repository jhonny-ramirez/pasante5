import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGuardadoMisUbicacionesComponent } from './formulario-guardado-mis-ubicaciones.component';

describe('FormularioGuardadoMisUbicacionesComponent', () => {
  let component: FormularioGuardadoMisUbicacionesComponent;
  let fixture: ComponentFixture<FormularioGuardadoMisUbicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGuardadoMisUbicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGuardadoMisUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
