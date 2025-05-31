import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoUsuario } from './tipousuario.model';

@Injectable({
  providedIn: 'root',
})
export class TipoUsuarioService {
  private apiURL = 'http://localhost:3000/tipousuario';

  constructor(private http: HttpClient) {}

  listarTipoUsuario(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(this.apiURL);
  }

  cadastrarTipoUsuario(tipousuario: TipoUsuario): Observable<TipoUsuario> {
    return this.http.post<TipoUsuario>(this.apiURL, tipousuario);
  }

  buscarTipoUsuario(id: string): Observable<TipoUsuario> {
    return this.http.get<TipoUsuario>(`${this.apiURL}/${id}`);
  }

  atualizarTipoUsuario(
    id: string,
    tipousuario: TipoUsuario
  ): Observable<TipoUsuario> {
    return this.http.patch<TipoUsuario>(`${this.apiURL}/${id}`, tipousuario);
  }

  deletarTipoUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
