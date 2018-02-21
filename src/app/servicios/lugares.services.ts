import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";

@Injectable()
export class LugaresServices{

    listaLugares:any = {};

    constructor( private afDB : AngularFireDatabase, private http : Http ){

    }

    public getLugares(){
        return this.afDB.list('lugares/');
    }

    buscarLugar(id){
        return this.listaLugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }

    guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    public obtenerUbicacion( direccion ){
        return this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + direccion);

        //=78-43+diagonal+70f,+Bogota,Colombia
    }

}