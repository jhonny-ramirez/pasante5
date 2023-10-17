import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feature, Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
import Geolocation from 'ol/Geolocation';
import { toStringXY } from 'ol/coordinate';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Output() latlong = new EventEmitter<any>();
  iconLayer: any = new VectorLayer({
    source: new VectorSource(),
    style: new Style({
      image: new Icon({
        src: './../../../assets/images/ubicacion_icono.png',
        anchor: [0.5, 1],
        scale: 0.05
      })
    })
  });
  mapa:any;
  constructor() { }
  ngOnInit(): void {
    
    let mapa = new Map({
      target:'map',
      layers:[
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center:fromLonLat([0,0]),
        zoom:16
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
    mapa.addLayer(this.iconLayer);

    mapa.on('click', (event) => {
      const coordenada = event.coordinate;
      const lonLat = transform(coordenada, 'EPSG:3857', 'EPSG:4326');
      this.latlong.emit(lonLat);
     
      
      let iconFeature = new Feature({
        geometry: new Point(coordenada),
      });
      this.iconLayer.getSource().clear();
      this.iconLayer.getSource().addFeature(iconFeature);

      console.log('Latitud, Longitud:', toStringXY(coordenada, 6));
    });
  }

}
