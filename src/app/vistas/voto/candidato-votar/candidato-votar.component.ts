import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/modelo/candidato';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { CandidatoService } from 'src/app/servicio/candidato.service';

@Component({
  selector: 'app-candidato-votar',
  templateUrl: './candidato-votar.component.html',
  styleUrls: ['./candidato-votar.component.css']
})
export class CandidatoVotarComponent implements OnInit{
  cargo: string = "";
  public candidato: any=[] ;
  public listaCandidato!: any ;
  constructor(private activatedRoute: ActivatedRoute, private candidatoService: CandidatoService,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{this.cargo = params['cargo']})
    this.candidatoService.listarPorcargo(this.cargo).subscribe((data) => {
      this.candidato = data
      this.listaCandidato= this.candidato})
  }

}
