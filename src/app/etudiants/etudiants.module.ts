import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtudiantsPageRoutingModule } from './etudiants-routing.module';

import { EtudiantsPage } from './etudiants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtudiantsPageRoutingModule
  ],
  declarations: [EtudiantsPage]
})
export class EtudiantsPageModule {}
