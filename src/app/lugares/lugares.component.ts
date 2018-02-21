import { Component } from '@angular/core';
import { LugaresServices } from '../servicios/lugares.services';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
})

export class LugaresComponent{

    lat: number = 4.6560432;
    lng: number = -74.0595718;
    listaLugares = null;    
    constructor( private lugaresServicio: LugaresServices ){
        lugaresServicio.getLugares()
        .valueChanges().subscribe( lugares => {
            this.listaLugares = lugares;
        });
    }

   

}