import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacaoService {

  constructor(private http: HttpClient) { }

  getEducacoes(): Observable<any> {
    return this.http.get<any>(`api/educacao`);
  }

}
