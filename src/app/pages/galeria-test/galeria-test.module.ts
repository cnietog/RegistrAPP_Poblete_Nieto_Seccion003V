import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaTestPageRoutingModule } from './galeria-test-routing.module';

import { GaleriaTestPage } from './galeria-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaTestPageRoutingModule
  ],
  declarations: [GaleriaTestPage]
})
export class GaleriaTestPageModule {}
