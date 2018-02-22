import { Component } from "@angular/core";
import { LugaresServices } from "../servicios/lugares.services";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-negocio',
    templateUrl: './negocio.component.html'
})
export class NegocioComponent{
    lugar:any = {};
    idLugar:any = null;
    constructor(private lugarService : LugaresServices, private router : ActivatedRoute){
        this.idLugar = router.snapshot.params["id"];
        if( this.idLugar != 'new' ){
            this.lugarService.getLugar( this.idLugar ).valueChanges().subscribe( (lugarDB) => {
                this.lugar = lugarDB;
            } );
        }
    }

    guardarLugar(){
        var direccion = this.lugar.direccion + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
        this.lugarService.obtenerUbicacion( direccion ).subscribe( ( jsonUbicacion ) => {
            this.lugar.lat = jsonUbicacion.json().results[0].geometry.location.lat;
            this.lugar.lng = jsonUbicacion.json().results[0].geometry.location.lng;

            if( this.idLugar != 'new' ){
                this.lugarService.editarLugar( this.lugar );
            }else{
                this.lugar.id = Date.now();
                this.lugar.active = true; 
                this.lugarService.guardarLugar(this.lugar);
            }
        })
        
    }

}