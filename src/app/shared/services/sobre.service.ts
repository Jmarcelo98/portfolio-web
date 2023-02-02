import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperiencia } from '../interfaces/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  constructor(private http: HttpClient) { }

  getSobre(): Observable<any> {
    return this.http.get<any>(`api/sobre`);
  }

}
