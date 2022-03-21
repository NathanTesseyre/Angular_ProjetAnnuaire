import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  personnes: Personne[] = [
    { nom: 'Lagaffe', prenom: 'Gaston', tel: '01 02 03 04 05' },
    { nom: 'de-chez-Smith-en-face', prenom: 'Jules', tel: '' },
    { nom: 'Jeanne', prenom: 'Mademoiselle', tel: '05 04 03 02 01' },
    { nom: 'Prunelle', prenom: 'Léon', tel: '05 04 03 02 01' },
    { nom: 'Lebrac', prenom: 'Yves', tel: '05 12 43 52 71' },
    { nom: 'Labévue', prenom: 'Bertrand', tel: '05 04 03 02 01' },
    { nom: 'Jeanne', prenom: 'Mademoiselle', tel: '05 04 03 02 01' }
  ];

  constructor() { }
  
  /**
   * Retourne la liste des personnes
   * @returns Le tableau des personnes
   */
  getPersonnes() : Personne[] {
    return this.personnes;
  }

  /**
   * Ajouter une personne dans la base
   */
  addPersonne(p : Personne) {
    this.personnes.push(p);
  }

  /**
   * Supprime une personne de la base
   */
  deletePersonne(personneASupprimer : Personne) {
    //this.personnes.splice(this.personnes.indexOf(personneASupprimer),1);
    
    // //filter() retourne un tableau modifié via le filtre qu'on lui fourni
    // this.personnes = this.personnes.filter(
    //   //Filtre fourni
    //   function(p: Personne){
    //     //Retourne vrai si on conserve la personne dans le tableau
    //     return p != personneASupprimer;
    //   }
    // );

    this.personnes = this.personnes.filter(p => p != personneASupprimer);
  }

}
