import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService{

    constructor(private angularFireAuth: AngularFireAuth, private router : Router){
        this.islogged();
    }

    public facebookLogin(){
        this.angularFireAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() ).then( (resultado) => {
            console.log("Usuario loged con facebook");
            this.router.navigate(['lugares']);
        }).catch( (error) => {
            console.log( "Error login facebook" )
        } ) 
    }

    public login = ( email, password ) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then( (respuesta) =>{
            console.log("Usuario inicio sesion");
            this.router.navigate(['lugares']);
        }).catch( (error) => {
            console.log("Ocurrio un error: " + error);
        } );
    }

    public registrar = ( email, password ) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then( (respuesta) =>{
            console.log("Usuario registrado");
            this.router.navigate(['lugares']);
        }).catch( (error) => {
            console.log("Ocurrio un error: " + error);
        } );
    }

    public islogged(){
        return this.angularFireAuth.authState;
    }
    
    public logout(){
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['login']);
    }

    public getNameUser(){
        return this.angularFireAuth.auth.currentUser.displayName;
    }
}