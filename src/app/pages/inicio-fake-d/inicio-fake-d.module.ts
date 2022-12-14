import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioFakeDPageRoutingModule } from './inicio-fake-d-routing.module';

import { InicioFakeDPage } from './inicio-fake-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioFakeDPageRoutingModule
  ],
  declarations: [InicioFakeDPage]
})
export class InicioFakeDPageModule {}
