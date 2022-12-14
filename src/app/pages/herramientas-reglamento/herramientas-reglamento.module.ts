import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasReglamentoPageRoutingModule } from './herramientas-reglamento-routing.module';

import { HerramientasReglamentoPage } from './herramientas-reglamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasReglamentoPageRoutingModule
  ],
  declarations: [HerramientasReglamentoPage]
})
export class HerramientasReglamentoPageModule {}
