import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-agua',
  templateUrl: './calculadora-agua.page.html',
  styleUrls: ['./calculadora-agua.page.scss'],
})
export class CalculadoraAguaPage implements OnInit {
  peso!: string;
  cantidadAguaLitros!: string | number;
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
  constructor() { }

  ngOnInit() {
  }

}
