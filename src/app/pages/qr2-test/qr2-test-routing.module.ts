import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr2TestPage } from './qr2-test.page';

const routes: Routes = [
  {
    path: '',
    component: Qr2TestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qr2TestPageRoutingModule {}
