import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerCorreoPage } from './restablecer-correo.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerCorreoPageRoutingModule {}
