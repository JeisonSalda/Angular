import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresServices } from '../servicios/lugares.services';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})

export class DetalleComponent{
    private idLugar;
    private lugar;

    constructor( private router : ActivatedRoute, private lugarServices: LugaresServices){
        console.log( router.snapshot.params["id"] );
        console.log( router.snapshot.queryParams["action"] );
        console.log( router.snapshot.queryParams["actionDos"] )
        this.idLugar = router.snapshot.params["id"];
        this.lugar = this.lugarServices.buscarLugar(this.idLugar);
    }
}