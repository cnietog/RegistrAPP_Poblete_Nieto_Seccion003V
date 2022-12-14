import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qr2TestPageRoutingModule } from './qr2-test-routing.module';

import { Qr2TestPage } from './qr2-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qr2TestPageRoutingModule
  ],
  declarations: [Qr2TestPage]
})
export class Qr2TestPageModule {}
