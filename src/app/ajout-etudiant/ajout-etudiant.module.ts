import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutEtudiantPageRoutingModule } from './ajout-etudiant-routing.module';

import { AjoutEtudiantPage } from './ajout-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutEtudiantPageRoutingModule
  ],
  declarations: [AjoutEtudiantPage]
})
export class AjoutEtudiantPageModule {}
