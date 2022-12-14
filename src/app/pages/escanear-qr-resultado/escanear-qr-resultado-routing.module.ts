import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearQrResultadoPage } from './escanear-qr-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearQrResultadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearQrResultadoPageRoutingModule {}
