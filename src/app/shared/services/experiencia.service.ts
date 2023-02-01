import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperiencia } from '../interfaces/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  getExperiencias(): Observable<any> {
    return this.http.get<IExperiencia[]>(`api/experiencias`);
}

}
