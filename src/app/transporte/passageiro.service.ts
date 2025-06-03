import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passageiro } from './passageiro.model';

@Injectable({
  providedIn: 'root',
})
export class PassageiroService {
  private apiURL = 'http://localhost:3000/passageiro';

  constructor(private http: HttpClient) {}

  listarPassageiro(
    filtroNome = '',
    filtroEmail = '',
    sort: 'nome' | 'email' = 'nome',
    direction: 'asc' | 'desc' = 'asc'
  ): Observable<Passageiro[]> {
    return this.http.get<Passageiro[]>(this.apiURL, {
      params: new HttpParams()
        .set('nome', filtroNome)
        .set('email', filtroEmail)
        .set('sort', sort)
        .set('direction', direction),
    });
  }

  cadastrarPassageiro(passageiro: Passageiro): Observable<Passageiro> {
    return this.http.post<Passageiro>(this.apiURL, passageiro);
  }

  buscarPassageiro(id: string): Observable<Passageiro> {
    return this.http.get<Passageiro>(`${this.apiURL}/${id}`);
  }

  atualizarPassageiro(
    id: string,
    passageiro: Passageiro
  ): Observable<Passageiro> {
    return this.http.patch<Passageiro>(`${this.apiURL}/${id}`, passageiro);
  }

  deletarPassageiro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
