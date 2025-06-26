import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorista } from './motorista.model';

@Injectable({
  providedIn: 'root',
})
export class MotoristaService {
  private apiURL = 'http://localhost:3000/motorista';

  constructor(private http: HttpClient) {}

  listarMotorista(): Observable<Motorista[]> {
    return this.http.get<Motorista[]>(this.apiURL);
  }

  cadastrarMotorista(motorista: Motorista): Observable<Motorista> {
    return this.http.post<Motorista>(this.apiURL, motorista);
  }

  buscarMotorista(id: string): Observable<Motorista> {
    return this.http.get<Motorista>(`${this.apiURL}/${id}`);
  }

  atualizarMotorista(
    id: string,
    motorista: Motorista
  ): Observable<Motorista> {
    return this.http.patch<Motorista>(`${this.apiURL}/${id}`, motorista);
  }

  deletarMotorista(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
