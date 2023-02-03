import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router} from '@angular/router';
import { Votante } from 'src/app/modelo/votante';
import { VotanteService } from 'src/app/servicio/votante.service';

@Component({
  selector: 'app-editar-votante',
  templateUrl: './editar-votante.component.html',
  styleUrls: ['./editar-votante.component.css']
})
export class EditarVotanteComponent implements OnInit{
  id: number = 0
  votanteData: Votante = {
    nombre:'',
    telefono:'',
    cedula:'',
    direccion:'',
    ciudad:'',
    departamento:''

  }
  votanteRegistro :Votante = new Votante();
  public candidato:any;

  constructor(private activatedRoute: ActivatedRoute, private votanteService: VotanteService,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{this.id = params['id']})
    this.votanteService.listarPorId(this.id).subscribe(data => {this.votanteData = data})
  }

 public editarCandidato(){
    this.votanteService.actualizar(this.votanteData, this.id).subscribe(resp => {
        this.router.navigate(['/votante'])
    }
  )}
} 
