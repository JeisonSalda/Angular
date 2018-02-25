import { Component } from "@angular/core";
import { AutorizacionService } from "../servicios/autorizacion.services";

@Component({
    selector : 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent{
    registro:any = {};
    constructor(private autorizacionService: AutorizacionService){
        
    }

    registrar(){
        this.autorizacionService.registrar(this.registro.email, this.registro.password);
    }
    
}