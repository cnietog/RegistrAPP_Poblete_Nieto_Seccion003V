import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEstudiantesPage } from './login-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEstudiantesPageRoutingModule {}
