import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  transform(value: number) {

    switch (value) {
      case 12:
        return "Soltero"
      case 13:
        return "Casado / Sociedad conyugal"
      case 14:
        return "Casado / Separación de bienes"
      default:
        break;
    }

    return null;
  }

}
