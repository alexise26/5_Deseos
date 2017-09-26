import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import {DetalleComponent} from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class terminadosComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService,private navCtrl:NavController) {  }

  ngOnInit() {}

  verDetalle(lista, idx){
    this.navCtrl.push(DetalleComponent, {lista, idx });
  }
}
