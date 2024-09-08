import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Alimentos} from "../../../common/alimentos";
import {BloqueComida, Comida} from "../../../common/interfaces";

@Component({
  selector: 'app-formulario-alimentos',
  templateUrl: './formulario-alimentos.page.html',
  styleUrls: ['./formulario-alimentos.page.scss'],
})
export class FormularioAlimentosPage implements OnInit {
  id!: string;
  alimento!: Alimentos;
  comidas: Comida[] = [];
  bloqueComida!: BloqueComida;

  formComida: FormGroup = this.formbuilder.group({
    nombre: [''],
    tipo: [''],
    descripcion: [''],
    img: [''],
    grasa: [''],
    proteina: [''],
    carbohidrato: ['']
  });

  get nombre() {
    return this.formComida.get('nombre');
  }

  get tipo() {
    return this.formComida.get('tipo');
  }

  get descripcion() {
    return this.formComida.get('descripcion');
  }

  get img() {
    return this.formComida.get('img');
  }

  get grasa() {
    return this.formComida.get('grasa');
  }

  get proteina() {
    return this.formComida.get('proteina');
  }

  get carbohidrato() {
    return this.formComida.get('carbohidrato');
  }

  constructor(private service: DataService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {

  }

  addAlimento() {
    this.service.addAlimento(this.formComida.getRawValue()).subscribe({
      next: value => {
        alert(value.status);
        console.log(this.formComida.getRawValue())
      },
      error: err => {
        console.log(err);
        console.log(this.formComida.getRawValue())
      },
      complete: () => {
        console.log('Done');
      }
    });
  }


}
