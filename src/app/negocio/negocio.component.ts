import { Component } from "@angular/core";
import { LugaresServices } from "../servicios/lugares.services";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { FormControl } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
    selector: 'app-negocio',
    templateUrl: './negocio.component.html'
})
export class NegocioComponent{
    lugar:any = {};
    idLugar:any = null;
    private searchField : FormControl;
    resultadoStream: Observable<any>;
    constructor(private lugarService : LugaresServices, private router : ActivatedRoute, private http : Http){
        this.idLugar = router.snapshot.params["id"];
        if( this.idLugar != 'new' ){
            this.lugarService.getLugar( this.idLugar ).valueChanges().subscribe( (lugarDB) => {
                this.lugar = lugarDB;
            } );
        }
        const URL = 'https://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.resultadoStream = this.searchField.valueChanges
                                .debounceTime(1000)
                                .switchMap( query => this.http.get( `${URL}?address=${query}` ) )
                                .map( respuesta => respuesta.json())
                                .map( respuesta => respuesta.results );
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

    getDireccion( resultado ){
        this.lugar.direccion = resultado.address_components[1].long_name 
                                + ' ' + resultado.address_components[0].long_name;
        this.lugar.ciudad = resultado.address_components[3].long_name
                                + ', ' + resultado.address_components[5].long_name;
        this.lugar.pais = resultado.address_components[6].long_name;
    }

}