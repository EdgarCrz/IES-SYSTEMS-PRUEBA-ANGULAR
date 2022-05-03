import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError, delay } from 'rxjs/operators';



// const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login = (formData: LoginForm) => {
    // como es un observable tenemos que retornar la peticion
    // el primer parametro es la url de la peticion y el segundo el body de la peticion
    return this.http.post<{exito: Boolean, mensaje:string, data?:{infUsuario:{nombre:string, apellidoPaterno:string}}}>(`https://desa.ies-webcontent.com.mx/login`, formData);
    // .pipe(
    //   tap((resp: any) => {
    //     console.log(resp);
        
    //     this.guardarLocalStorage(resp.token, resp.menu); // para reducir codigo centralizamos  ambos seteos de localStorage en un metodo que carga ambas cosas, valio la pensa hacerlo así ya que esto se repetia varias veces (4-5)
    //   })
    // );
  };
}
