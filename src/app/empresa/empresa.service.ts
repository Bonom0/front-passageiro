import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private apiURL = 'http://localhost:3000/empresa';

  constructor(private http: HttpClient) {}

  listarEmpresa(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiURL);
  }

  cadastrarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiURL, empresa);
  }

  buscarEmpresa(id: string): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiURL}/${id}`);
  }

  atualizarEmpresa(
    id: string,
    empresa: Empresa
  ): Observable<Empresa> {
    return this.http.patch<Empresa>(`${this.apiURL}/${id}`, empresa);
  }

  deletarEmpresa(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
