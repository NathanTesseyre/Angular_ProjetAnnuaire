import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { PersonnesService } from 'src/app/services/personnes.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent implements OnInit {

  personneService : PersonnesService;

  @Input()
  pers ! : Personne;
  //On déclare un nouvel event (qu'on pourra déclencher en envoyant alors un objet Personne)
  @Output() suppressionPersonne = new EventEmitter<Personne>();

  constructor(private ps : PersonnesService) {
    this.personneService = ps;
   }

  ngOnInit(): void {
  }

/**
 * Supprimer la personne
 */
  onClickButtonSuppr(){
    this.ps.deletePersonne(this.pers);
    this.suppressionPersonne.emit(this.pers);
  }

}
