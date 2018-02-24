import { Component } from '@angular/core';
import { LugaresServices } from '../servicios/lugares.services';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable',[
            state('inicial', style({
                opacity: 0,
            })),
            state('final', style({
                opacity: 1,
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(1000)),
        ])
    ]
})

export class LugaresComponent{

    lat: number = 6.2836246;
    lng: number = -75.6069129;
    listaLugares = null;
    mensajeError = null;
    isError = false;
    state = 'inicial';    
    constructor( private lugaresServicio: LugaresServices ){
        lugaresServicio.getLugares()
        .subscribe( (lugares) => {
            this.listaLugares = lugares;
            var me = this;
            this.listaLugares =  Object.keys(me.listaLugares).map( function( key ){ return me.listaLugares[ key ] });
            this.state = 'final';
        }, error => {
            this.mensajeError = 'Tenemos algunas dificultades, disculpe las molestias. Error: ' + error.statusText;
            this.isError = true;
        });
    }

    public animar(){
        this.state = (this.state === 'final' ? 'inicial': 'final');
    }

    public animacionInicia( event ){
        console.log("Iniciado");
        console.log(event);
    }

    public animacionTermina( event ){
        console.log("Terminado");
        console.log(event);
    }
}