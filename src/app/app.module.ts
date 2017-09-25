import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//components
import {pendientesComponent} from '../pages/pendientes/pendientes.component';
import {terminadosComponent} from '../pages/terminados/terminados.component';
import {AgregarComponent} from '../pages/agregar/agregar.component';
//servicios
import {ListaDeseosService} from './services/lista-deseos.service';
//Pipes
import {PlaceHolderPipe} from './pipes/placeholder.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    pendientesComponent,
    terminadosComponent,
    AgregarComponent,
    PlaceHolderPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    pendientesComponent,
    terminadosComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService
  ]
})
export class AppModule {}
