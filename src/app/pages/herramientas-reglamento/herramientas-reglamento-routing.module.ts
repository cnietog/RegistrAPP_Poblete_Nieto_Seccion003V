import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasReglamentoPage } from './herramientas-reglamento.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasReglamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasReglamentoPageRoutingModule {}
