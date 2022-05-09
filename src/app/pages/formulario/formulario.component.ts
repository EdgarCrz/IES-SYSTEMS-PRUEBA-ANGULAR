import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EnvioFormService } from 'src/app/services/envio-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public formEnviado = false;
  msgError = false;
  isOpenLoading = false;
  textoLoading: string = "Esperando respuesta";
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
      nombre: ['', [, Validators.required, this.validacionEspacios]],  //TODO: Validacion personalizada
      apellidos: ['', [Validators.required, this.validacionEspacios]],//TODO: Validacion personalizada
      fumas: [, [Validators.required]],
      actualmentePracticasLectura: [, [Validators.required]],
      librosLeidosUltimosTresMeses: [this.librosLeidos,],
      estadoCivil: [''],

    },

  );

  constructor(private fb: FormBuilder, private envioForm: EnvioFormService) { }

 
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

  enviarForm() {
    this.formEnviado = true;
    if (!this.infoUsuario.valid) {

      this.msgError = true;

    } else {

      this.msgError = false;
      this.isOpenLoading = true;

      console.log(this.infoUsuario.value);

      this.envioForm.enviarForm(this.infoUsuario.value).subscribe((resp) => {
        console.log(resp);
        this.isOpenLoading = false;

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
