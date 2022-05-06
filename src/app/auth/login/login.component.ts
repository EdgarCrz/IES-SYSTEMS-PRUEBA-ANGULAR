import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarContrasena: boolean = false;
  password: string = 'password'


  public iesUser = this.fb.group({
    // carlos.oviedo
    username: [localStorage.getItem('loginName') || '', [Validators.required]],
    // $oyAdmin666
    password: ['', Validators.required],
    recordar: [false],

  })

  constructor(private router: Router, private fb: FormBuilder, private login: LoginService) {
    console.log(this.mostrarContrasena);
  }

  ngOnInit(): void {
  }

  entrar() {

    this.login.login(this.iesUser.value).subscribe((resp) => {
      const nombre = resp.data?.infUsuario.nombre;
      const apellido = resp.data?.infUsuario.apellidoPaterno;
      const { mensaje, exito } = resp;
      // console.log(exito);
      // console.log(resp);

      // TODO: VERIFICAR FUNCIONAMIENDO
      // TODO: AGREGAR ERROR DE USUARIO NO ENCONTRADO
      if (exito === true) {

        Swal.fire({
          icon: 'success',
          title: `${mensaje}`,
          text: `Bienvenido ${nombre} ${apellido}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/');
        if (this.iesUser.get('recordar')?.value) {
          localStorage.setItem('loginName', this.iesUser.get('username')?.value)
        } else {
          localStorage.removeItem('loginName');
        }
      }
    }, (err) => {
      Swal.fire('Error', err.error.mensaje, 'error');
      console.log(err);

    })

    this.router.navigateByUrl('/');

  }

  mostrarPassword(value: boolean) {

    value === true ? this.password = '' : this.password = 'password';

  }

}
