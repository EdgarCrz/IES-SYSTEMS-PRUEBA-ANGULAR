import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(){
    
    
  }
 




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      // FIXME: Como no tengo donde verificar que sea un token valido, simplemente lo deje en que si existe un token en local storage podemos entrar, lo cual lo hace peligroso porque cualquier persona que sepa puede introducir cualquier cosa mediante el navegador y entrar
     if (localStorage.getItem('token')!?.length > 0) {
       return true;
     }else{
       return false;
     }
    
  }
  
}
