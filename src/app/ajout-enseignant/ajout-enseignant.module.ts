import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutEnseignantPageRoutingModule } from './ajout-enseignant-routing.module';

import { AjoutEnseignantPage } from './ajout-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutEnseignantPageRoutingModule
  ],
  declarations: [AjoutEnseignantPage]
})
export class AjoutEnseignantPageModule {}
