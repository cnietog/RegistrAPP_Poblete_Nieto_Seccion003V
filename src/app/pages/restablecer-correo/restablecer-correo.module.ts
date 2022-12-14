import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerCorreoPageRoutingModule } from './restablecer-correo-routing.module';

import { RestablecerCorreoPage } from './restablecer-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerCorreoPageRoutingModule
  ],
  declarations: [RestablecerCorreoPage]
})
export class RestablecerCorreoPageModule {}
