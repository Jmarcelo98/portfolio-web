import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http: HttpClient) { }

  getContratos(): Observable<any> {
    return this.http.get<any>(`api/contatos`);
    // return this.http.get<any>(`api/usuarios/`).pipe(
    //     map((response) => {
    //         const data = this.extractData(response);
    //         return data;
    //     }),
    // );
}

}
