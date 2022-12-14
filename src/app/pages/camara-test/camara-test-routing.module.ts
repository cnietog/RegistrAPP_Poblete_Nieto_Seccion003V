import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraTestPage } from './camara-test.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraTestPageRoutingModule {}
