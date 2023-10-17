import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-guardado-mis-ubicaciones',
  templateUrl: './formulario-guardado-mis-ubicaciones.component.html',
  styleUrls: ['./formulario-guardado-mis-ubicaciones.component.css']
})
export class FormularioGuardadoMisUbicacionesComponent implements OnInit {
  eliminarElemento(index: number) {
    this.lugares.splice(index, 1);
  }
  coordenada:any;
  recibirValorDelHijo($event: any) {
    console.log("RECIBIR VALOR DE HIJO");
    console.log($event);
    this.coordenada=$event;
  }
  lugares:any[]=[];
  lugar:any={};
  guardar() {
    if(this.coordenada){
      this.lugar.coordenadas=this.coordenada;
      this.lugares.push(this.lugar);
      this.lugar={};
      Swal.fire({
        title: 'Lugar añadido correctamente!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: 'Defina una coordenada en el mapa!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
