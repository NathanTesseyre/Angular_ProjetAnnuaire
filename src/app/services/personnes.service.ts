import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compteur } from '../models/Compteur';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  private apiUrl: string = 'http://localhost:3000/api/Personnes';

  constructor(private http: HttpClient) {

  }

  /**
   * Retourne la liste des personnes
   * @returns Le tableau des personnes
   */
  getPersonnes(): Observable<Personne[]> {
    // TODO
    return this.http.get<Personne[]>(this.apiUrl);
  }

  /**
   * Ajouter une personne dans la base
   */
  addPersonne(p: Personne) : Observable<Personne> {
    return this.http.post<Personne>(this.apiUrl,p);
  }

  /**
   * Supprime une personne de la base
   */
  deletePersonne(personneASupprimer: Personne) : Observable<Compteur> {
    return this.http.delete<Compteur>(this.apiUrl+'/'+personneASupprimer.id);
  }

}
