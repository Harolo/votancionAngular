import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/servicio/candidato.service';
import { Candidato } from 'src/app/modelo/candidato';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{

  public id: any;
  public formRegistro!: FormGroup;
  public cand:any;
  public respuesta: any;
  public candidato: any=[] ;
  public listaCandidato!: any ;
 

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService,
    ){}

  ngOnInit(): void {
      this.crearFormulario();
      this.listarCandidato();
  }

  private crearFormulario() {
    this.formRegistro = this.fb.group({
      id: [''],
      nombre: [null,Validators.required],
      telefono: [null,Validators.required],
      cedula: [null,Validators.required],
      cargo: [null,Validators.required]
    });
  }

  public guardar() {
    let candidatoRegistro : Candidato = new Candidato();
    candidatoRegistro.nombre=this.formRegistro.controls['nombre'].value;
    candidatoRegistro.telefono=this.formRegistro.controls['telefono'].value;
    candidatoRegistro.cedula=this.formRegistro.controls['cedula'].value;
    candidatoRegistro.cargo=this.formRegistro.controls['cargo'].value;
    this.registarCandidato(candidatoRegistro);
  }


  public registarCandidato(candidato: any){
    this.candidatoService.registrar(candidato).subscribe(res => {
    });
    
   
  }

  public listarCandidato(){
    this.candidatoService.listar().subscribe((res) => {
      this.candidato = res;
      this.listaCandidato = this.candidato;
    });
  }

  public eliminar(id: number) {
    this.candidatoService.eliminar(id).subscribe( (res) => {
       
      }
      
     );
      
  }

}
