import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { AgmCoreModule } from '@agm/core';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresServices } from './servicios/lugares.services';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NegocioComponent } from './negocio/negocio.component';
import { FormsModule } from '@angular/forms';


const appRoutes : Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'negocio', component: NegocioComponent}

]
export const firebaseConfig = {
  apiKey: "AIzaSyCJ1yCOFX3DO1Zbame47FvPLoOHAe-SKKE",
  authDomain: "platzisquare-1517766351111.firebaseapp.com",
  databaseURL: "https://platzisquare-1517766351111.firebaseio.com",
  projectId: "platzisquare-1517766351111",
  storageBucket: "",
  messagingSenderId: "525683215417"
};

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    NegocioComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDw5-vK0mvGRfrEblvKaQcfrCeybeVK-8'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule
  ],
  providers: [LugaresServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
