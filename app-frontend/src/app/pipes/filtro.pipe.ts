import { Pipe, PipeTransform } from '@angular/core';
import {Alimentos} from "../common/alimentos";

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listaComida: Alimentos[], texto: string): any {
    if (texto == '')return listaComida;

    texto = texto.toLowerCase();
    return listaComida.filter(
      item => item.nombre.toLowerCase().includes(texto) || item.tipo.toLowerCase().includes(texto)
    );
  }

}
