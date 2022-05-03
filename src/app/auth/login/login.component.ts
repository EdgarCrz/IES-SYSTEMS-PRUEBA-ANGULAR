import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  public iesUser = this.fb.group({
    username: ['carlos.oviedo', [ Validators.required]],
    password: ['$oyAdmin666', Validators.required],
  
  })
  
  constructor(private fb: FormBuilder, private login: LoginService) { }
  
  ngOnInit(): void {
  }


  entrar(){

    this.login.login(this.iesUser.value).subscribe((resp)=>{
      const nombre = resp.data?.infUsuario.nombre;
      const apellido = resp.data?.infUsuario.apellidoPaterno;
      
      const {mensaje, exito} = resp;
      // console.log(exito);

      // TODO: VERIFICAR FUNCIONAMIENDO
      if (exito === false) {
       Swal.fire({
        icon: 'error',
        title: `${mensaje}`,
        
        showConfirmButton: false,
        timer: 1000
      })
        
      }else{

        Swal.fire({
          icon: 'success',
          title: `${mensaje}`,
          text: `Bienvenido ${nombre} ${apellido}`,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
    // console.log(this.iesUser.value);
    
    // console.log(this.iesUser.get('usuario')!.value);
    // console.log(this.iesUser.get('contrasena')!.value);
    
  }
  
}
