import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: './accueil',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajout-etudiant',
    loadChildren: () => import('./ajout-etudiant/ajout-etudiant.module').then( m => m.AjoutEtudiantPageModule)
  },
  {
    path: 'ajout-enseignant',
    loadChildren: () => import('./ajout-enseignant/ajout-enseignant.module').then( m => m.AjoutEnseignantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
