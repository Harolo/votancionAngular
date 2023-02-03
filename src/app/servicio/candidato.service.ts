import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidato } from '../modelo/candidato';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private url = "http://localhost:8080/api/candidato/";

  constructor(private http:HttpClient) { }

  public registrar(candidato: Candidato){
    return this.http.post<void>(this.url+'registrar',candidato);
  }

  public listar(){
    return this.http.get<Candidato[]>(this.url+'listarTodo');
  } 

  public listarPorId(id: number){
    return this.http.get<Candidato>(this.url+'listarCandidato/'+id);
  }

  public listarPorcargo(cargo: string){
    return this.http.get<Candidato>(this.url+'listar/'+cargo);
  }

  public actualizar(candidato: Candidato, id:number){
    return this.http.put<void>(this.url+'actualizar/'+id,candidato);
  }

  public eliminar(id: number){
    return this.http.delete<string>(this.url+'eliminar/'+id);
  }
}
