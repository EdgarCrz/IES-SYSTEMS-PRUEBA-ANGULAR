import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioFormService {

  constructor( private http: HttpClient) { }



  enviarForm(data:number){
    const url = `http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil`
    return this.http.post(url, {data});
  }
}
