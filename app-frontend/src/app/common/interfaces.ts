export interface Usuario {
  _id: string;
  username: string;
  avatar: string;
  email: string;
  password: string;
  objetivo: string,
  actividad: string,
  sexo: string,
  edad: string,
  altura: string,
  peso: string,
  bloqueComida: [BloqueComida]
}
export interface BloqueComida{
  nombreBloque: string
  _id:string
  comida: Comida[]
}
export interface Comida{
  _id: string
  nombre: string
  tipo: string
  descripcion: string
  img: string
  grasa: string
  proteina: string
  carbohidrato: string
  cantidad: string
}


