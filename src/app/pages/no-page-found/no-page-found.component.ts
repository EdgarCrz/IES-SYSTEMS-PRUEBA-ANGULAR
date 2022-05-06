import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.css']
})
export class NoPageFoundComponent implements OnInit {

  existeToken!:boolean;
  constructor(private loginService: LoginService) {
  }
  
  ngOnInit(): void {
    this.varificarToken()
  }

  varificarToken(){
    this.loginService.verificarToken().subscribe((token)=>{
    token === true ? this.existeToken = true : this.existeToken = false;
    })
  }

}
