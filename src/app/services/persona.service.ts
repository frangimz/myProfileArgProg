import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portafoliofrangimzarg.fly.dev/personas/';
  //URL = 'http://localhost:8080/personas/';

  constructor(private http:HttpClient) { }

  public getPersona():Observable <persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

  public update(id: number, persona: persona):Observable<any>{
    return this.http.put<any>(this.URL+ `update/${id}`,persona);
  }

  obtenerDatos():Observable<any>{
    //console.log("porfolio esta corriendo");
    return this.http.get('./assets/data/data.json');
  }
}
