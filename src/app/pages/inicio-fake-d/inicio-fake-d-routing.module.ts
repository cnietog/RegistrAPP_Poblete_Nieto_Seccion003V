import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioFakeDPage } from './inicio-fake-d.page';

const routes: Routes = [
  {
    path: '',
    component: InicioFakeDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioFakeDPageRoutingModule {}
