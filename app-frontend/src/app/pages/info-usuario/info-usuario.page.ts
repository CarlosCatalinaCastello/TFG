import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {
  info_user!: Usuario;
  loginUp: boolean = true;
  editar = false;

  formUser: FormGroup = this.formbuilder.group({
    _id: [''],
    objetivo: [''],
    actividad: [''],
    sexo: [''],
    edad: [''],
    altura: [''],
    peso: ['']
  });
  constructor(private service: DataService, private formbuilder: FormBuilder) {

  }
  ngOnInit() {
    this.loadUser();
  }

  //GETTERS
  get objetivo(){
    return this.formUser.get('objetivo');
  }
  get actividad(){
    return this.formUser.get('actividad');
  }
  get sexo(){
    return this.formUser.get('sexo');
  }
  get edad(){
    return this.formUser.get('edad');
  }
  get altura(){
    return this.formUser.get('altura');
  }
  get peso(){
    return this.formUser.get('peso');
  }

  //funcion actualizar

  updateInfoUser(){
      this.service.updateUser(this.formUser.getRawValue()).subscribe({
        next: value => {
          console.log(value)
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


  private loadUser() {
    console.log(this.service.usuario)
    this.formUser.patchValue(this.service.usuario);
    this.loginUp = false;
  }
}
