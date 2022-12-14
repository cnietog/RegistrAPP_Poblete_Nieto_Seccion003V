import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginnPageRoutingModule } from './loginn-routing.module';

import { LoginnPage } from './loginn.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginnPageRoutingModule
  ],
  declarations: [LoginnPage]
})
export class LoginnPageModule {}
