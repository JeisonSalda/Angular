import { Component } from "@angular/core";
import { AutorizacionService } from "../servicios/autorizacion.services";

@Component({
    selector : 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    loginParams:any = {};
    constructor(private autorizacionService: AutorizacionService){
        
    }
    public login(){
        this.autorizacionService.login(this.loginParams.email, this.loginParams.password);
    }

    public facebookLogin() {
        this.autorizacionService.facebookLogin();
    }
}