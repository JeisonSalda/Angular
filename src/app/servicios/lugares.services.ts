import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresServices{

    listaLugares:any = [
        {id:1,active:true,distancia:1, nombre:"Ceiba Software", description:"Ceiba lo mejor", plan: "Pagado"},
        {id:2,active:false,distancia:2, nombre:"PSL", description:"PSL no se", plan: "Gratuito"},
        {id:3,active:true, distancia:4, nombre:"Intergrupo", description:"Integrupo mas o menos", plan:"Pagado"},
        {id:4,active:true, distancia:10, nombre:"Google Inc", description:"Google", plan:"Pagado"},
        {id:5,active:true, distancia:20, nombre:"Amazon Inc", description:"Amazon", plan:"Pagado"}
      ];

    constructor( private afDB : AngularFireDatabase ){

    }

    public getLugares(){
        return this.listaLugares;
    }

    buscarLugar(id){
        return this.listaLugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }

    guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/1').set(lugar);
    }

}