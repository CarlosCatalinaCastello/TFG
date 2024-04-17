import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../common/interfaces";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {MenuLateral} from "../common/menu-lateral";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlUser = 'http://localhost:3000/api/login/';
  private urlOneUser = 'http://localhost:3000/api/login/user/';

  token: string = '';
  usuario!: Usuario;
  constructor(private http: HttpClient, private router: Router) { }

  registro(usuario: Usuario): Promise<any>{
    return new Promise(resolve => {
      this.http.post(this.urlUser+'register', usuario)
        .subscribe(this.promesaGuardaToken(resolve));
    }).catch( err => {
      console.log(err);
    })
  }
  login(email: string, password: string){
    const data = {email, password};
    return new Promise(resolve => {
      this.http.post(this.urlUser+'login', data)
        .subscribe(this.promesaGuardaToken(resolve));
    }).catch(err =>{
      console.log(err);
    })
  }


  promesaGuardaToken(resolve: (value: (PromiseLike<unknown> | unknown)) => void) {
    return async (resp: any) =>{
      if (resp.ok){
        await this.guardarToken(resp.token);
        resolve(true);
      }else{
        this.token = '';
        localStorage.clear();
        resolve(false);
      }
    }
  }

  //Guardamos el token en el localStorage para que lo tenga el usuario en el navegador
  async guardarToken(token: string) {
    this.token = token;
    await localStorage.setItem('token', token);
    await this.validaToken();
  }

  //Validamos el token para comprovar si es o no valido
  async validaToken(): Promise<boolean> {
    await this.cargarToken();
    //Si no tenemos el login mandamos al usuario a la pagina del Login
    if (!this.token){
      this.router.navigateByUrl('/login');
      return Promise.resolve(false);
    }
    //Si es correcto lo guardamos en x-token para posteriormente hacer la petición del usuario
    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(this.urlUser+'user',{headers}).subscribe({
        next: (value: any) => {
          if (value.ok){
            this.usuario = value.usuario;
            //this.usuario.next(value.usuario);
            resolve(true);
          }else{
            this.router.navigateByUrl('/login');
            resolve(false);
          }
        }
      });
    })
  }

  async cargarToken() {
    this.token = await localStorage.getItem('token') || '';
  }



  getUser(): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlUser);
  }

  public getOneUser(id?: string):Observable<Usuario>{
    return this.http.get<Usuario>(this.urlOneUser+id);
  }
  updateUser(user: Usuario): Observable<ResponseApiFull>{
    return this.http.patch<ResponseApiFull>(this.urlUser+user._id, user);
  }

  //Menú lateral
  getMenuLateral(): Observable<MenuLateral[]>{
    return this.http.get<MenuLateral[]>('/assets/data/menu.json');
  }


}
interface ResponseApiFull{
  status: string;
  data: Usuario;
}
