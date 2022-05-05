import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService , private router: Router){
    
    
  }
 




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> |Promise<boolean> | boolean{

//  si tenemos un token entonces retornara un true si no entonces nos mandara al login
    return this.loginService.verificarToken().pipe(
      tap((tieneToken)=>{
        if (!tieneToken) {
          this.router.navigate(['/login']);
          
        }
      })
    )
  }
  
}
