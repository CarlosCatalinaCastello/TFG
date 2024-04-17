import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {Usuario} from "../../../common/interfaces";

@Component({
  selector: 'app-cal-imc-hombre',
  templateUrl: './cal-imc-hombre.page.html',
  styleUrls: ['/cal-imc-hombre.page.scss'],
})
export class CalIMCHombrePage implements OnInit{
  altura!: string;
  peso!: string;
  resultado!: string;

  info_user!: Usuario;
  constructor(private service: DataService) {
  }

  calcularIMC() {
    // Convertir altura y peso a números
    const alturaCm = parseFloat(this.info_user.altura) || parseFloat(this.altura);
    const peso = parseFloat(this.info_user.peso) || parseFloat(this.peso);

    // Convertir altura a metros (ya que la fórmula del IMC requiere la altura en metros)
    const alturaMetros = alturaCm / 100;

    // Verificar que los valores sean válidos
    if (!isNaN(alturaCm) && !isNaN(peso) && alturaCm > 0 && peso > 0) {
      // Calcular el IMC
      const imc = peso / (alturaMetros * alturaMetros);

      // Redondear el resultado a un decimal con aproximación
      const imcRedondeado = Math.round(imc * 10) / 10;

      // Mostrar el resultado
      this.resultado = imcRedondeado.toString();
    } else {
      // Si los valores no son válidos, mostrar un mensaje de error
      this.resultado = 'Por favor, ingrese valores válidos para altura y peso.';
    }
  }



  ngOnInit(): void {
    this.loadInfoUser();
  }


  private loadInfoUser() {
    this.info_user = this.service.usuario;
    this.peso = this.info_user.peso;
    this.altura = this.info_user.altura;
    console.log(this.info_user)
  }
}

