import { Component, OnInit } from '@angular/core';
import { ServicioIntento1Service } from "../../Servicios/servicio-intento1.service";

declare var lsimpleAdd:any;
declare var lsimplePrint:any;
declare var funcion2:any;
@Component({
  selector: 'app-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  displayVal='';

  getValue(val:string){
    console.warn(val)
    var hola = lsimpleAdd(val)
    
    this.displayVal=hola
  }

 
  elementos: any=[]

  constructor(private servicio: ServicioIntento1Service ) { }

  ngOnInit(): void {}
  add(dato:any){ lsimpleAdd(dato) }
  

}