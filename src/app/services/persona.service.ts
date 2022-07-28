import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://myprofile-b.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }

  public getPersona():Observable <persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
  obtenerDatos():Observable<any>{
    //console.log("porfolio esta corriendo");
    return this.http.get('./assets/data/data.json');
  }
}
