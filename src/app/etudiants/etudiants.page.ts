import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.page.html',
  styleUrls: ['./etudiants.page.scss'],
})
export class EtudiantsPage implements OnInit {
  nom:string;
  prenom:string;
  statut:boolean;
  sexe:string;
  compte:string;
  naissance:date;

  constructor(public db: AngularFireDatabase) { }

  add() {
    this.db.list('Etudiant/').push({
      'nom': this.nom,
      'prenom': this.prenom,
      'sexe':this.sexe,
      'compte': this.compte,
      'statut':this.statut,
      'naissance':this.naissance
    });
  }

}
