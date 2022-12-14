import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialAsignaturaPageRoutingModule } from './historial-asignatura-routing.module';

import { HistorialAsignaturaPage } from './historial-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialAsignaturaPageRoutingModule
  ],
  declarations: [HistorialAsignaturaPage]
})
export class HistorialAsignaturaPageModule {}
