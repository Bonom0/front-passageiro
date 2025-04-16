import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passageiro } from './passageiro.model';

@Injectable({
  providedIn: 'root',
})
export class PassageiroService {
  private apiURL = 'http://localhost:3000/passageiro';

  constructor(private http: HttpClient) {}

  listarPassageiro(): Observable<Passageiro[]> {
    return this.http.get<Passageiro[]>(this.apiURL);
  }

  cadastrarPassageiro(passageiro: Passageiro): Observable<Passageiro> {
    return this.http.post<Passageiro>(this.apiURL, passageiro);
  }

  buscarPassageiro(id: number): Observable<Passageiro> {
    return this.http.get<Passageiro>(`${this.apiURL}/${id}`);
  }

  atualizarPassageiro(
    id: number,
    passageiro: Passageiro
  ): Observable<Passageiro> {
    return this.http.patch<Passageiro>(`${this.apiURL}/${id}`, passageiro);
  }

  deletarPassageiro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
