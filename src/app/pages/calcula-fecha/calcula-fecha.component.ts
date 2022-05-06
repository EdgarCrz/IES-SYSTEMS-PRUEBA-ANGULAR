import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.css']
})
export class CalculaFechaComponent implements OnInit {

  fecha: Date = new Date();
  unidades: string[] = ["días", "meses", "años"];
  unidad: string = "";
  cantidad: number = 0;

  botonOrEvent:boolean = false;
  constructor() {
    // console.log(this.fecha);
    console.log(this.unidad);
    console.log(this.botonOrEvent);
    

  }

  ngOnInit(): void {
  }


  // probarSwitch() {
  //   console.log(this.unidad);


  // }
  aumentarFecha(fecha: Date, cantidad: number) {



    switch (this.unidad) {
      case "días":
        console.log("SOMOS DÍAS");
        const nuevoDia = new Date(fecha.setHours(fecha.getHours() + cantidad * 24)); // TODO: Día listo

        this.fecha = nuevoDia;
        break;
      case "meses":
        console.log("SOMOS MESES");
        const nuevoMes = new Date(fecha.setMonth(fecha.getMonth() + cantidad)); // TODO: Mes listo
        this.fecha = nuevoMes;

        break;
      case "años":
        console.log("SOMOS AÑOS");
        const nuevoAño = new Date(fecha.setFullYear(fecha.getFullYear() + cantidad)); // Años listo 
        this.fecha = nuevoAño;

        break;

      default:
        break;
    }

    // return console.log(new Date(fecha.setHours(fecha.getHours() + unidad * 24)));  TODO: Día listo

    // return console.log(new Date(fecha.setMonth(fecha.getMonth()+ unidad))); // TODO: Mes listo

    // return console.log(new Date(fecha.setFullYear(fecha.getFullYear() + unidad))); // Años listo 






  }



}
