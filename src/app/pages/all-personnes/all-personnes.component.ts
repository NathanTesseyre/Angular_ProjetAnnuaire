import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { PersonnesService } from 'src/app/services/personnes.service';

@Component({
  selector: 'app-all-personnes',
  templateUrl: './all-personnes.component.html',
  styleUrls: ['./all-personnes.component.css']
})

export class AllPersonnesComponent implements OnInit {

  personnesAAfficher: Personne[] = [];
  personneService : PersonnesService;

  //Injection de la dépendance (récup du singleton PersonnesService)
  //Un singleton est un objet unique dans sa classe
  constructor(private ps : PersonnesService) {
    this.personneService = ps;
    this.majPersonnesAAfficher();
   }

  ngOnInit(): void {
  }

  /**
   * Met à jour l'affichage de la liste des personnes
   */
  onSuppressionPersonne(){
    this.majPersonnesAAfficher();
  }

  majPersonnesAAfficher(){
    this.personneService.getPersonnes().subscribe(
      //Truc à faire quand la liste des personnes sera produite
      (personnes : Personne[]) => {
         this.personnesAAfficher = personnes
      }
    );
  }

}
