import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() pagina!: string;

  formUser: FormGroup = this.formbuilder.group({
    email: [''],
    password: [''],
  });

  constructor(private formbuilder: FormBuilder, private service: DataService, private router: Router) { }

  //GETTERS
  get email(){
    return this.formUser.get('email');
  }
  get password(){
    return this.formUser.get('password');
  }


  async login(){
    if (this.formUser.invalid) return;
    const valido = await this.service.login(this.email?.value, this.password?.value)

    if (valido){
      this.router.navigateByUrl('/mensage');
    }else {
      alert('Usuario y contraseña invalidos')
    }
  }

  ngOnInit() {
  }

}
