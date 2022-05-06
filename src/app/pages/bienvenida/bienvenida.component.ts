import { Component } from '@angular/core';



@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  isOpen: boolean = false;
  isMovil: boolean = false;
  nombre: string = '';
  mostrarNombre: boolean = false;

  constructor() {
    console.log(this.nombre);
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
