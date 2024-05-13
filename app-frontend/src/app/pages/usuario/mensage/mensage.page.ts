import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";
import {Usuario} from "../../../common/interfaces";

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.page.html',
  styleUrls: ['./mensage.page.scss'],
})
export class MensagePage implements OnInit {
  user: Usuario;
  loginUp: boolean = false;

  formUser: FormGroup = this.formbuilder.group({
    _id:[''],
    objetivo: [''],
    actividad: [''],
    sexo: [''],
    edad: [''],
    altura: [''],
    peso: ['']
  });

  constructor(private formbuilder: FormBuilder, private service: DataService, private router: Router) {
    this.user = service.usuario;
    console.log(this.user)
  }
  ngOnInit() {
    this.loadUser();
  }

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

  onSubmit(){
    console.log('submit')
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

  nextPage() {
    this.router.navigateByUrl('/home');
  }
}
