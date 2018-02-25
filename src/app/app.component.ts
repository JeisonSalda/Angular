import { Component } from '@angular/core';
import { AutorizacionService } from './servicios/autorizacion.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loggedIn = false;
  nombreUsuario = '';
  constructor(private autorizacionService : AutorizacionService){
    this.autorizacionService.islogged().subscribe( (resultado) => {
      if( resultado && resultado.uid ){
        this.loggedIn = true;
        this.nombreUsuario = this.autorizacionService.getNameUser();
      }else{
        this.loggedIn = false;
      }
    }, ( error ) => {
      this.loggedIn = false;
    })
  }

  public logout(){
    this.autorizacionService.logout();
  }

}
