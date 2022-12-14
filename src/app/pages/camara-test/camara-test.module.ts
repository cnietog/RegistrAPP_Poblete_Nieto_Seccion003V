import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraTestPageRoutingModule } from './camara-test-routing.module';

import { CamaraTestPage } from './camara-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraTestPageRoutingModule
  ],
  declarations: [CamaraTestPage]
})
export class CamaraTestPageModule {}
