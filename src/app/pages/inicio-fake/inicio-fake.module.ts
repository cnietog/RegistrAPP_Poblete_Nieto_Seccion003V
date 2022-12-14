import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioFakePageRoutingModule } from './inicio-fake-routing.module';

import { InicioFakePage } from './inicio-fake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioFakePageRoutingModule
  ],
  declarations: [InicioFakePage]
})
export class InicioFakePageModule {}
