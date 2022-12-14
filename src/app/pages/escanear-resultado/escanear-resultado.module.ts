import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearResultadoPageRoutingModule } from './escanear-resultado-routing.module';

import { EscanearResultadoPage } from './escanear-resultado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearResultadoPageRoutingModule
  ],
  declarations: [EscanearResultadoPage]
})
export class EscanearResultadoPageModule {}
