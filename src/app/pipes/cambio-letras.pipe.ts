import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string) {

    const reg_a = /a/gi;
    const reg_e = /e/gi;
    const reg_i = /i/gi;
    const reg_o = /o/gi;
    const reg_u = /u/gi;
    const nombre = value;
    const nombreTransformado = nombre.replace(reg_a, "4").replace(reg_e, "3").replace(reg_i, "1").replace(reg_o, "0").replace(reg_u,"9")
    

    return nombreTransformado;
  }

}
