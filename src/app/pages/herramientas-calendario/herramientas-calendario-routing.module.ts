import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasCalendarioPage } from './herramientas-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasCalendarioPageRoutingModule {}
