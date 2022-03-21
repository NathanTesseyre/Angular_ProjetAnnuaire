import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AddPersonneComponent } from './pages/add-personne/add-personne.component';
import { AllPersonnesComponent } from './pages/all-personnes/all-personnes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { FormsModule } from '@angular/forms';
import { DetailsPersonneComponent } from './pages/details-personne/details-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    AddPersonneComponent,
    AllPersonnesComponent,
    ContactComponent,
    AProposComponent,
    DetailsPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
