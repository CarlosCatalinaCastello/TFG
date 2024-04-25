import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../common/interfaces";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-calculadora-agua',
  templateUrl: './calculadora-agua.page.html',
  styleUrls: ['./calculadora-agua.page.scss'],
})
export class CalculadoraAguaPage implements OnInit {
  peso!: string;
  cantidadAguaLitros!: string | number;
  info_user!: Usuario;

  calcularCantidadAgua(): void {
    if (this.peso) {

      const pesoNumero = parseFloat(this.peso);

      if (!isNaN(pesoNumero)) {
        this.cantidadAguaLitros = (pesoNumero * 35) / 1000; // Convertimos de ml a litros
      } else {
        this.cantidadAguaLitros = "Por favor, inserta un peso válido";
      }
    } else {
      this.cantidadAguaLitros = "";
    }
  }
  constructor(private service: DataService) { }

  ngOnInit() {
    this.loadInfoUser();
  }

  private loadInfoUser() {
    this.info_user = this.service.usuario;
    this.peso = this.info_user.peso;
    console.log(this.info_user)
  }
}
