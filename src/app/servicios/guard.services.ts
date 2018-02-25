import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AutorizacionService } from "./autorizacion.services";

@Injectable()
export class AccesoRutasServices implements CanActivate{

    loggedIn = false;

  constructor(private autorizacionService : AutorizacionService){
    this.autorizacionService.islogged().subscribe( (resultado) => {
      if( resultado && resultado.uid ){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    }, ( error ) => {
      this.loggedIn = false;
    })
  }

  canActivate(){
      return this.loggedIn;
  }

}