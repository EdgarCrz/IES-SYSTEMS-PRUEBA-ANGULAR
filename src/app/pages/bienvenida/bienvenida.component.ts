import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  isOpen: boolean = false;
  isMovil: boolean = false;
  nombre: string = '';
  mostrarNombre: boolean = false;

  constructor() {
    console.log(this.nombre);

  }


  ngOnInit(): void {

  }



  openModal() {
    this.isOpen = true;
    this.mostrarNombre = false;

  }
  closeModal() {
    this.isOpen = false;
    this.mostrarNombre = true;
  }

}
