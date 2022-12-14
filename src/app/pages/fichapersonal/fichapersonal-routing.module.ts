import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichapersonalPage } from './fichapersonal.page';

const routes: Routes = [
  {
    path: '',
    component: FichapersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichapersonalPageRoutingModule {}
