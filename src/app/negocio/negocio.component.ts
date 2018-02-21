import { Component } from "@angular/core";
import { LugaresServices } from "../servicios/lugares.services";

@Component({
    selector: 'app-negocio',
    templateUrl: './negocio.component.html'
})
export class NegocioComponent{
    lugar:any = {};
    constructor(private lugarService : LugaresServices){
        
    }

    guardarLugar(){
        var direccion = this.lugar.direccion + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
        this.lugarService.obtenerUbicacion( direccion ).subscribe( ( jsonUbicacion ) => {
            this.lugar.lat = jsonUbicacion.json().results[0].geometry.location.lat;
            this.lugar.lng = jsonUbicacion.json().results[0].geometry.location.lng;
            this.lugar.id = Date.now();
            this.lugar.active = true; 
            this.lugarService.guardarLugar(this.lugar);
        })
        
    }

}