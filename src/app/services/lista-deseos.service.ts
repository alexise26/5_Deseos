import { Injectable } from '@angular/core';
import {ListaItem} from '../classes/lista-item';
import {Lista} from '../classes/listas';


@Injectable()
export class ListaDeseosService {

  listas:Lista[]=[];

  constructor() {
    let lista1= new Lista("Compras del supermercado");
    let lista2= new Lista("Juegos que deseo");
    let lista3= new Lista("Cosas de la Universidad");

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
    
    console.log("Servicio inicializado");
  }
}
