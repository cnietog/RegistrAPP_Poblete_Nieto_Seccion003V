import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichapersonalPageRoutingModule } from './fichapersonal-routing.module';

import { FichapersonalPage } from './fichapersonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichapersonalPageRoutingModule
  ],
  declarations: [FichapersonalPage]
})
export class FichapersonalPageModule {}
