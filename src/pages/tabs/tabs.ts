import { Component } from '@angular/core';

import {terminadosComponent} from '../terminados/terminados.component';
import {pendientesComponent} from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = pendientesComponent;
  tab2Root = terminadosComponent;

  constructor() {

  }
}
