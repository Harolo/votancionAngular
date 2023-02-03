import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router} from '@angular/router';
import { Candidato } from 'src/app/modelo/candidato';
import { CandidatoService } from 'src/app/servicio/candidato.service';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.css']
})
export class EditarCandidatoComponent implements OnInit {
  id: number = 0
  candidatoData: Candidato = {
    nombre:'',
    cedula:'',
    telefono:'',
    cargo:'',

  }
  candidatoRegistro :Candidato = new Candidato();
  public candidato:any;

  constructor(private activatedRoute: ActivatedRoute, private candidatoService: CandidatoService,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{this.id = params['id']})
    this.candidatoService.listarPorId(this.id).subscribe(data => {this.candidatoData = data})
  }

 public editarCandidato(){
    this.candidatoService.actualizar(this.candidatoData, this.id).subscribe(resp => {
        this.router.navigate(['candidato'])
    }
  )}
}
