import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './vistas/candidato/candidato.component';
import { VotanteComponent } from './vistas/votante/votante.component';
import { VotoComponent } from './vistas/voto/voto.component';
import { EditarCandidatoComponent } from './vistas/candidato/editar-candidato/editar-candidato.component';
import { EditarVotanteComponent } from './vistas/votante/editar-votante/editar-votante.component';
import { CandidatoVotarComponent } from './vistas/voto/candidato-votar/candidato-votar.component';
import { HomeComponent } from './plantillas/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'candidato', component:CandidatoComponent},
  { path:'editarCandidato/:id', component:EditarCandidatoComponent},
  { path:'votante', component:VotanteComponent },
  { path:'editarVotante/:id', component:EditarVotanteComponent},
  { path:'votar', component:VotoComponent},
  { path:'votarCandidato/:cargo', component:CandidatoVotarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routerComponents=[CandidatoComponent,VotanteComponent,VotoComponent,EditarCandidatoComponent, EditarVotanteComponent]
