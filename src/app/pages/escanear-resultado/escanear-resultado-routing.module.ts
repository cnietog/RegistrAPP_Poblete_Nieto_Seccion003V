import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearResultadoPage } from './escanear-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearResultadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearResultadoPageRoutingModule {}
