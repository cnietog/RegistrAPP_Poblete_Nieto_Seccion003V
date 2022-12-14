import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasCalendarioPageRoutingModule } from './herramientas-calendario-routing.module';

import { HerramientasCalendarioPage } from './herramientas-calendario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasCalendarioPageRoutingModule
  ],
  declarations: [HerramientasCalendarioPage]
})
export class HerramientasCalendarioPageModule {}
