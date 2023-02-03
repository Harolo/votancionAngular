import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Votante } from 'src/app/modelo/votante';
import { VotanteService } from 'src/app/servicio/votante.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.css']
})
export class VotanteComponent implements OnInit {

  
  public id: any;
  public formRegistro!: FormGroup;
  public vot:any;
  public votante: any=[] ;
  public listaVotante!: any ;
 

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private votanteService: VotanteService,
    ){}

    ngOnInit(): void {
      this.listarVotante();
      this.crearFormulario();
    }

    
  private crearFormulario() {
    this.formRegistro = this.fb.group({
      id: [''],
      nombre: [null,Validators.required],
      telefono: [null,Validators.required],
      cedula: [null,Validators.required],
      direccion: [null,Validators.required],
      ciudad: [null,Validators.required],
      departamento: [null,Validators.required],
    });
  }

  public guardar() {
    let votanteRegistro : Votante = new Votante();
    votanteRegistro.nombre=this.formRegistro.controls['nombre'].value;
    votanteRegistro.telefono=this.formRegistro.controls['telefono'].value;
    votanteRegistro.cedula=this.formRegistro.controls['cedula'].value;
    votanteRegistro.direccion=this.formRegistro.controls['direccion'].value;
    votanteRegistro.ciudad=this.formRegistro.controls['ciudad'].value;
    votanteRegistro.departamento=this.formRegistro.controls['departamento'].value;
    this.registarVotante(votanteRegistro);
  }


  public registarVotante(votante: any){
    this.votanteService.registrar(votante).subscribe(res => {
      this.showAlert();
      this.router.navigate(['votante'])
    }, error=>{
      
      console.error(error)
    });
    
   
  }

  public listarVotante(){
    this.votanteService.listar().subscribe((res) => {
      this.votante = res;
      this.listaVotante = this.votante;
    });
  }

  public eliminar(id: number) {
    this.votanteService.eliminar(id).subscribe((res) => {
        this.router.navigate(['votante'])
      },
     
    );
  }

  showAlert(){
    Swal.fire('pelicula eliminada','pelicula eliminada con exito en el sistema','success');
  }

}
