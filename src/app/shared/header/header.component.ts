import { Component,  OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-items.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // showFiller = false;
  // mostrarMenu: boolean = false;

  constructor(private router: Router) {
    
    
     
      
     }

  

  ngOnInit(): void {

    
  }


  menuItems: MenuItem[] = [
    {
      ruta: '',
      nombre: 'Bienvenida',
    },
    {
      ruta: 'conversiones',
      nombre: 'Conversiones',
    },
    {
      ruta: 'fecha',
      nombre: 'Calcula fecha',

    },
    {
      ruta: 'formulario',
      nombre: 'Formulario',
    },
    // TODO: Si sobra tiempo agregar logOut

  ];

}
