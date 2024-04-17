import { Component, OnInit } from '@angular/core';
import {BloqueComida, Comida, Usuario} from "../../../common/interfaces";
import {DataService} from "../../../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-comida',
  templateUrl: './agregar-comida.page.html',
  styleUrls: ['./agregar-comida.page.scss'],
})
export class AgregarComidaPage implements OnInit {

comida!: Usuario;
bloqueComida: BloqueComida[] = [];
comidas: Comida[] = [];


  formComida: FormGroup = this.formbuilder.group({
    _id: [''],
    bloqueComida: this.formbuilder.group({
      nombreBloque: [''],
      comida: this.formbuilder.group({
        id_Comida: [''],
        nombre: [''],
        tipo: [''],
        descripcion: [''],
        img: [''],
        grasa: [''],
        carbohidrato: [''],
        proteina: [''],
        cantidad: ['']
      })
    })
  });

  get nombreBloque(){
    return this.formComida.get('objetivo');
  }
  get id_Comida(){
    return this.formComida.get('id_Comida');
  }
  get nombre(){
    return this.formComida.get('nombre');
  }
  get tipo(){
    return this.formComida.get('tipo');
  }
  get descripcion(){
    return this.formComida.get('descripcion');
  }
  get img(){
    return this.formComida.get('peso');
  }
  get grasa(){
    return this.formComida.get('grasa');
  }
  get carbohidrato(){
    return this.formComida.get('carbohidrato');
  }
  get proteina(){
    return this.formComida.get('proteina');
  }
  get cantidad(){
    return this.formComida.get('cantidad');
  }
  constructor(private service: DataService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loadBloqueComida();
    this.loadAlimentos();
  }


  private loadBloqueComida() {
    this.comida = this.service.usuario;
    this.bloqueComida = this.comida.bloqueComida;
    this.comidas = this.comida.comida;
    console.log(this.comida)
    console.log(this.bloqueComida)
    console.log(this.comidas)


  }

  private loadAlimentos() {

  }

  addBloqueComida() {

    //this.bloqueComida.push(this.formComida.getRawValue());

    //const user = {_id: this.comida._id, bloqueComida: this.bloqueComida};

    this.service.updateUser(this.formComida.getRawValue()).subscribe({
      next: value => {
        console.log(value)
        this.loadBloqueComida();
        alert(value.status);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }

  goListComida(id?: string) {
    this.router.navigate(["lista-alimentos/" + id]);
  }
}
