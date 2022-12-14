import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaTestPage } from './galeria-test.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaTestPageRoutingModule {}
