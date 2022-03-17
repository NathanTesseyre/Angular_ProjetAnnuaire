import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AddPersonneComponent } from './pages/add-personne/add-personne.component';
import { AllPersonnesComponent } from './pages/all-personnes/all-personnes.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'add-personne', component: AddPersonneComponent },
  { path: 'all-personnes', component: AllPersonnesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AProposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
