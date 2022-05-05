import { EventEmitter, Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



// const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  public get token() {
    return localStorage.getItem('token') || ''; //para evitar estar haciendo esto cada que necesitemos el token del localstorage
  }

  login = (formData: LoginForm) => {
 
    return this.http.post<{ exito: Boolean, mensaje: string, data?: { token: string, infUsuario: { nombre: string, apellidoPaterno: string, loginName: string } } }>(`https://desa.ies-webcontent.com.mx/login`, formData)
      .pipe(
        tap((resp: any) => {
          // console.log(resp);

          localStorage.setItem('token', resp.data.token) // para reducir codigo centralizamos  ambos seteos de localStorage en un metodo que carga ambas cosas, valio la pensa hacerlo así ya que esto se repetia varias veces (4-5)

        })
      );
  };


  // FIXME:Con un endpoint "de revision de token" en el cual podamos mandar el token actual podriamos compararlo podriamos hacerlo mas seguro evitando asi que cualquiera pueda entrar solo agregando un token
  verificarToken(): Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false)
    }
    return of (true);
  }
}
