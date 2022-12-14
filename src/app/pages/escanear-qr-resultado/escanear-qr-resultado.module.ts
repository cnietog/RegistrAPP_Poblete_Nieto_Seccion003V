import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQrResultadoPageRoutingModule } from './escanear-qr-resultado-routing.module';

import { EscanearQrResultadoPage } from './escanear-qr-resultado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQrResultadoPageRoutingModule
  ],
  declarations: [EscanearQrResultadoPage]
})
export class EscanearQrResultadoPageModule {}
