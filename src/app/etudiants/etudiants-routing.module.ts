import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtudiantsPage } from './etudiants.page';

const routes: Routes = [
  {
    path: '',
    component: EtudiantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantsPageRoutingModule {}
