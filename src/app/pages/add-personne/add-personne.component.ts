import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/models/Personne';
import { PersonnesService } from 'src/app/services/personnes.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  //Déclaration d'un attribut
  personneService : PersonnesService;

  constructor(private ps : PersonnesService) {
    this.personneService = ps
   }

  ngOnInit(): void {
  }

  /**
   * Traite la soumission du formulaire d'ajout d'une personne.
   * @param form Le contenu du formulaire
   */
  onFormSubmit(form: NgForm){
    //Ajouter la personne via personneService
    this.personneService.addPersonne(this.formValueToPersonne(form.value)).subscribe( (p: Personne) => {});
  }

  formValueToPersonne(v: any) : Personne{
      return {
      nom : v.nom,
      prenom : v.prenom,
      tel : v.tel
    } as Personne;
  }

}
