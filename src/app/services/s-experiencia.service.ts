import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expeURL = 'https://backendprofileargprog-production.up.railway.app/explab/';
  //expeURL = 'http://localhost:8080/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expeURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expeURL + `detail/${id}`);
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.expeURL+ 'create',experiencia);
  }

  public update(id: number, experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.expeURL + `update/${id}`,experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expeURL + `delete/${id}`);
  }
}
