import {AngularFireDatabase} from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.page.html',
  styleUrls: ['./ajout-etudiant.page.scss'],
})
export class AjoutEtudiantPage implements OnInit {
  etudiants=[];

  constructor(public db : AngularFireDatabase) { 
    this.getEtudiants();
  }

  ngOnInit() {
  }

  getPersonnes(){
    this.db.list('Etudiant/').snapshotChanges(['child_added','child_removed']).subscribe(actions=> {
      actions.forEach(action=>{
          //console.log('Personne : ' + action.payload.exportVal().nom);
          this.etudiants.push({
              nom: action.payload.exportVal().nom,
              prenom: action.payload.exportVal().prenom,
              statut: action.payload.exportVal().statut,
              sexe: action.payload.exportVal().sexe,
              naissance: action.payload.exportVal().naissance,
              compte: action.payload.exportVal().compte
          });
      });
    });
  }

}
