import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operador } from './operador.model';

@Injectable({
  providedIn: 'root',
})
export class OperadorService {
  private apiURL = 'http://localhost:3000/operador';

  constructor(private http: HttpClient) {}

  listarOperador(): Observable<Operador[]> {
    return this.http.get<Operador[]>(this.apiURL);
  }

  cadastrarOperador(operador: Operador): Observable<Operador> {
    return this.http.post<Operador>(this.apiURL, operador);
  }

  buscarOperador(id: string): Observable<Operador> {
    return this.http.get<Operador>(`${this.apiURL}/${id}`);
  }

  atualizarOperador(
    id: string,
    operador: Operador
  ): Observable<Operador> {
    return this.http.patch<Operador>(`${this.apiURL}/${id}`, operador);
  }

  deletarOperador(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
