import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialAsignaturaPage } from './historial-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialAsignaturaPageRoutingModule {}
