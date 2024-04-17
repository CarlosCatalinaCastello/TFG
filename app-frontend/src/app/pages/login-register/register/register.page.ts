import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Input() pagina!: string;

  formUser: FormGroup = this.formbuilder.group({
    username: [''],
    email: [''],
    avatar: ['assets/avatar/av01.png'],
    password: [''],
  });

  loginUp: boolean = false;

  get username(){
    return this.formUser.get('username');
  }
  get email(){
    return this.formUser.get('email');
  }
  get password(){
    return this.formUser.get('password');
  }
  get avatar(){
    return this.formUser.get('avatar');
  }

  avatars: {img: string; seleccionado: boolean}[] = [{
    img: 'assets/avatar/av01.png',
    seleccionado: true
  },
    {
      img: 'assets/avatar/av02.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av03.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av04.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av05.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av06.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av07.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av08.png',
      seleccionado: false
    },
    {
      img: 'assets/avatar/av09.png',
      seleccionado: false
    }
  ]
  constructor(private formbuilder: FormBuilder, private service: DataService, private router: Router) { }

  ngOnInit() {
  }

  async register(){
    if (this.formUser.invalid)return;
    const valido = await this.service.registro(this.formUser.getRawValue())

    if (valido){
      this.router.navigateByUrl('/login');
    }else {
      alert('El email ya está en uso')
    }
  }

  seleccionarAvatar(avatar: {img: string, seleccionado: boolean}){
    this.avatars.forEach(av => av.seleccionado=false);
    avatar.seleccionado = true;
    this.formUser.controls['avatar'].setValue(avatar.img);
  }

  cleanForm(){
    this.formUser.reset();
  }

}
