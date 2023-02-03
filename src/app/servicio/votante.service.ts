import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Votante } from '../modelo/votante';
@Injectable({
  providedIn: 'root'
})
export class VotanteService {
  private url = "http://localhost:8080/api/votante/";

  constructor(private http:HttpClient) { }

  public registrar(votante: Votante){
    return this.http.post<void>(this.url+'registrar',votante);
  }

  public listar(){
    return this.http.get<Votante[]>(this.url+'listarTodo');
  } 

  public listarPorId(id: number){
    return this.http.get<Votante>(this.url+'listar/'+id);
  }

  public actualizar(votante: Votante, id:number){
    return this.http.put<void>(this.url+'actualizar/'+id,votante);
  }

  public eliminar(id: number){
    return this.http.delete<void>(this.url+'eliminar/'+id);
  }
}
