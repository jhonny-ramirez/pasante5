import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import Geolocation from 'ol/Geolocation';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const mapa = new Map({
      target:'map',
      layers:[
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center:fromLonLat([0,0]),
        zoom:5
      })
    });
    const mi_ubicacion=new Geolocation({
      tracking:true,
      trackingOptions:{
        enableHighAccuracy:true
      },
      projection:mapa.getView().getProjection()
    })
    mi_ubicacion.on('change:position',()=>{
      const coordenadas=mi_ubicacion.getPosition();
      mapa.getView().setCenter(coordenadas);
    })
  }

}
