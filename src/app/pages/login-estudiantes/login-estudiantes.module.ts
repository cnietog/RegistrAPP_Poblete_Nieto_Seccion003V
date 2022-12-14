import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEstudiantesPageRoutingModule } from './login-estudiantes-routing.module';

import { LoginEstudiantesPage } from './login-estudiantes.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginEstudiantesPageRoutingModule
  ],
  declarations: [LoginEstudiantesPage]
})
export class LoginEstudiantesPageModule {}
