import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PassageiroPresenca } from './passageiroPresenca.model';

@Injectable({ providedIn: 'root' })
export class PassageiroPresencaService {
  private apiURL = 'http://localhost:3000/passageiro-presenca';

  constructor(private http: HttpClient) {}

  confirmarPresenca(presenca: PassageiroPresenca): Observable<PassageiroPresenca> {
    return this.http.post<PassageiroPresenca>(this.apiURL, presenca);
  }
}
