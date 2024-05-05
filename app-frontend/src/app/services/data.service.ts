import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BloqueComida, Comida, Usuario} from "../common/interfaces";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {MenuLateral} from "../common/menu-lateral";
import {Alimentos} from "../common/alimentos";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlUser = 'http://localhost:3000/api/login/';
  private urlOneUser = 'http://localhost:3000/api/login/user/';
  private urlAlimentos = 'http://localhost:3000/api/comidas/';
  private urlOneAlimento = 'http://localhost:3000/api/comidas/comida/';
  private urlOneBloqueComida = 'http://localhost:3000/api/login/bloque/';


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


//interfaz de las comidas almacenadas en la web
  getAlimentos(): Observable<Alimentos[]>{
    return this.http.get<Alimentos[]>(this.urlAlimentos);
  }
  getOneAlimento(id?: string): Observable<Alimentos>{
    return this.http.get<Alimentos>(this.urlOneAlimento+id);
  }
  addAlimento(alimento: Alimentos): Observable<ResponseApi>{
    return this.http.post<ResponseApi>(this.urlAlimentos, alimento);
  }



  getOneUser(id?: string):Observable<Usuario>{
    return this.http.get<Usuario>(this.urlOneUser+id);
  }
  getOneBloque(id?: string):Observable<BloqueComida>{
    return this.http.get<BloqueComida>(this.urlOneBloqueComida+id);
  }



  updateUser(user: Usuario): Observable<ResponseApiFull>{
    console.log(user)
    return this.http.patch<ResponseApiFull>(this.urlUser+user._id, user);
  }
  updateBloqueComida(user: { bloqueComida: BloqueComida[] }, id: string): Observable<ResponseApiFull>{
    console.log(user)
    return this.http.patch<ResponseApiFull>(this.urlUser+id, user);
  }
  updateAlimentos(user: { alimento: Comida[] }, id: string): Observable<ResponseApiFull>{
    console.log(user)
    return this.http.patch<ResponseApiFull>(this.urlUser+id, user);
  }
  updateAlimento(user: { alimento: Comida[] }, id: string): Observable<ResponseApiFull>{
    console.log(user)
    return this.http.patch<ResponseApiFull>(this.urlUser+id, user);
  }


  //Menú lateral
  getMenuLateral(): Observable<MenuLateral[]>{
    return this.http.get<MenuLateral[]>('/assets/data/menu.json');
  }

  deleteComida(id: string): Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(this.urlUser+id);
  }


}
interface ResponseApiFull{
  status: string;
  data: Usuario;
}
interface ResponseApi{
  status: string;
}
