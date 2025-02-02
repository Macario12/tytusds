import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjToArrayPipe } from './objToArray.pipe';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { EstructurasLinealesComponent } from './componentes/estructuraslineales/estructuras-lineales.component';
import { OrdenamientosComponent } from './componentes/ordenamientos/ordenamientos.component';
import { ArbolesComponent } from './componentes/arboles/arboles.component';
import { ListaSimpleComponent } from './componentes/lista-simple/lista-simple.component';
@NgModule({
  declarations: [
    AppComponent,
    //InicioComponent,
    ObjToArrayPipe,
    InicioComponent,
    EstructurasLinealesComponent,
    OrdenamientosComponent,
    ArbolesComponent,
    ListaSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListaSimpleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
