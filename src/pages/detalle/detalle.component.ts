import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/classes/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'appDetalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:any;

  constructor(public navCtrl:NavController, public navParams: NavParams, public _listaDeseosService:ListaDeseosService, public alertCtrl: AlertController) {
    this.idx= navParams.get("idx");
    this.lista= navParams.get("lista");
   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado= !item.completado;

    let todosMarcados=true;
    for(let item of this.lista.items){
      if (!item.completado) {
          todosMarcados= false;
          break;
      }
    }
    this.lista.terminada = todosMarcados;

    this._listaDeseosService.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: 'Eliminar ' +  this.lista.nombre,
      message: '¿Deseas eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Elimnar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
