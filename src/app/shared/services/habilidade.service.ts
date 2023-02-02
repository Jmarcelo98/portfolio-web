import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  constructor(private http: HttpClient) { }

  getHabilidades(): Observable<any> {
    return this.http.get<any>(`api/habilidades`);
}

}
