import { Component } from '@angular/core';
import { LugaresServices } from '../servicios/lugares.services';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
})

export class LugaresComponent{

    lat: number = 6.2836246;
    lng: number = -75.6069129;
    listaLugares = null;    
    constructor( private lugaresServicio: LugaresServices ){
        lugaresServicio.getLugares()
        .subscribe( lugares => {
            this.listaLugares = lugares.json();
            var me = this;
            this.listaLugares =  Object.keys(me.listaLugares).map( function( key ){ return me.listaLugares[ key ] });
        });
    }

   

}