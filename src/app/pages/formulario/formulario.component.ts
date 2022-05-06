import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EnvioFormService } from 'src/app/services/envio-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formEnviado = false;
  msgError = false;
  isOpenLoading = false;
  textoLoading: string = "Verificando boletos";
  abrirCerrar: boolean = false;
  abrirInputLibros: boolean = false;
  librosLeidos: string[] = [];
  estadosCiviles: number[] = [12, 13, 14];
  estadoSeleccionado: string = "";
  libro: string = '';


  validacionEspacios(control: FormControl) {

    const nombre = control.value
    const nombreCortado = nombre.split(' ');
    // console.log(nombreCortado);
    
    const ultimoCaracter = nombreCortado[nombreCortado.length - 1];
    
     
    // /\s/.test(nombre)
    if (ultimoCaracter === '') {
      // console.log("AGUAS HAY UN ESPACIO EN BLANCO AL FINAL");
      return {
        espacioAlFinal: true
      }
    }
    return null
  }

  public infoUsuario = this.fb.group(
    {
      nombre: ['', [, Validators.required, this.validacionEspacios]],
      apellidos: ['', [Validators.required, this.validacionEspacios]],
      fumas: [, [Validators.required]],
      actualmentePracticasLectura: [, [Validators.required]],
      librosLeidosUltimosTresMeses: [this.librosLeidos,],
      estadoCivil: [''],

    },
    // {
    //   Validators 
    // }
  );

  constructor(private fb: FormBuilder, private envioForm:EnvioFormService) { }

  ngOnInit(): void {
  }
 
  // borrarLibros(){
  //   this.librosLeidos = [];
  // }
  mostrarNodoLibros(valor: boolean) {
    if (valor) {
      console.log("Abierto");
      this.abrirCerrar = true;

    } else {
      console.log("Cerrado");
      this.abrirCerrar = false;
      // En caso de seleccionar que no se practica tambien borraremos los libros, en caso de que se deseé cambiar de opinion y mandar el arreglo vacio
      this.infoUsuario.get('librosLeidosUltimosTresMeses')?.setValue(this.librosLeidos = []);

    }
    // console.log(this.infoUsuario.get('actualmentePracticasLectura')?.value);

  }
  agregarLibro() {
    // console.log(this.libro);
    this.librosLeidos.push(this.libro);
    this.libro = "";

  }

  removerLibro(libro: any) {
    const aBorrar = this.librosLeidos.indexOf(libro)
    
    this.librosLeidos.splice(aBorrar, 1);

  }

  enviarForm(){
    this.formEnviado = true;
    if (!this.infoUsuario.valid) {
      this.msgError = true;
    }else{
      this.msgError = false;
      this.isOpenLoading = true;

      console.log(this.infoUsuario.value);

      this.envioForm.enviarForm(this.infoUsuario.value).subscribe((resp)=>{
        console.log(resp);
        this.isOpenLoading = false;
        // this.infoUsuario.reset(); FIXME: verificar porque no resetea el formulario
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Información enviada',
          showConfirmButton: false,
          timer: 1500
        })
      

      })
     


    }
    
    
    
  }

 

}
