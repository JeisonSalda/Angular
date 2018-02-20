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
        this.lugarService.guardarLugar(this.lugar);
    }

}