import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-guardado-mis-ubicaciones',
  templateUrl: './formulario-guardado-mis-ubicaciones.component.html',
  styleUrls: ['./formulario-guardado-mis-ubicaciones.component.css']
})
export class FormularioGuardadoMisUbicacionesComponent implements OnInit {
  recibirValorDelHijo($event: any) {
    console.log("RECIBIR VALOR DE HIJO");
    console.log($event);
  }
  lugares:any[]=[];
  lugar:any={};
  guardar() {
    this.lugares.push(this.lugar);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
