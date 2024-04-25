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
  comida: [Comida],
  bloqueComida: [BloqueComida]
}
export interface BloqueComida{
  nombreBloque: string
  _id:string
  comida: Comida[]
}
export interface Comida{
  nombre: string
  tipo: string
  descripcion: string
  img: string
  grasa: string
  proteina: string
  carbohidrato: string
  cantidad: string
}
