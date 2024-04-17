import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-tmb',
  templateUrl: './calculadora-tmb.page.html',
  styleUrls: ['./calculadora-tmb.page.scss'],
})
export class CalculadoraTMBPage implements OnInit {

  peso!: string;
  altura!: string;
  edad!: string;
  sexo!: string;
  rmb!: number | null;

  calcularRMB() {
    const pesoNum = parseFloat(this.peso);
    const alturaNum = parseFloat(this.altura);
    const edadNum = parseFloat(this.edad);

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && !isNaN(edadNum)) {
      if (this.sexo === 'hombre') {
        this.rmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) + 5;
      } else if (this.sexo === 'mujer') {
        this.rmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) - 161;
      } else {
        // Si no se selecciona ningún sexo, mostrar un mensaje de error o manejarlo como prefieras.
        this.rmb = null;
      }
    } else {
      // Manejar el caso en que los valores ingresados no sean números válidos
      this.rmb = null;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
