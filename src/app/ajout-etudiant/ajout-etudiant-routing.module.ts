import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutEtudiantPage } from './ajout-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutEtudiantPageRoutingModule {}
