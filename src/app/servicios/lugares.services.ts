import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http, Headers} from "@angular/http";

@Injectable()
export class LugaresServices{

    listaLugares:any = {};
    API_ENDPOINT = "https://platzisquare-1517766351111.firebaseio.com";

    constructor( private afDB : AngularFireDatabase, private http : Http ){

    }

    public getLugares(){
        return this.afDB.list('lugares/');
        /*return this.http.get(this.API_ENDPOINT+'/.json').map( (resultado) => {
            const datos = resultado.json().lugares;
            return datos;
        } )*/
    }

    buscarLugar(id){
        return this.listaLugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }

    guardarLugar(lugar){
        //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        const headers = new Headers( {"Content-Type":"application/json"} );
        return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers : headers}).subscribe();
    }

    editarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    public obtenerUbicacion( direccion ){
        return this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + direccion);
    }

    public getLugar( idLugar ){
        return this.afDB.object('lugares/' + idLugar);
    }

}