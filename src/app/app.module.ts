import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './plantillas/nabvar/nabvar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarCandidatoComponent } from './vistas/candidato/editar-candidato/editar-candidato.component';
import { CandidatoComponent } from './vistas/candidato/candidato.component';
import { VotanteComponent } from './vistas/votante/votante.component';
import { VotoComponent } from './vistas/voto/voto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarVotanteComponent } from './vistas/votante/editar-votante/editar-votante.component';
import { CandidatoVotarComponent } from './vistas/voto/candidato-votar/candidato-votar.component';
import { HomeComponent } from './plantillas/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    EditarCandidatoComponent,
    CandidatoComponent,
    VotanteComponent,
    VotoComponent,
    EditarVotanteComponent,
    CandidatoVotarComponent,
    HomeComponent
    // routerComponents
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
