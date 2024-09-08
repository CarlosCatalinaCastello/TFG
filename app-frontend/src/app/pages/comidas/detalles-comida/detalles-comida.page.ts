import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { BloqueComida, Comida } from "../../../common/interfaces";
import Chart, { ChartType } from "chart.js/auto";

@Component({
  selector: 'app-detalles-comida',
  templateUrl: './detalles-comida.page.html',
  styleUrls: ['./detalles-comida.page.scss'],
})
export class DetallesComidaPage implements OnInit {
  id!: string;
  bloqueComida!: BloqueComida;
  comidas!: Comida[];
  totalCalorias: number = 0;

  public chart!: Chart;

  constructor(private service: DataService, private ruta: ActivatedRoute) {
  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      this.loadDetalles();
    });
  }

  private loadDetalles() {
    this.service.getOneBloque(this.id).subscribe({
      next: value => {
        this.bloqueComida = value;
        this.comidas = value.comida;
        this.calculateTotalCalories();
        setTimeout(() => {
          this.initializeChart();
        }, 100);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

  private initializeChart() {
    const totalProteinas = this.sumNutrient('proteina');
    const totalCarbohidratos = this.sumNutrient('carbohidrato');
    const totalGrasas = this.sumNutrient('grasa');

    const data = {
      labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
      datasets: [{
        data: [totalProteinas, totalCarbohidratos, totalGrasas],
        backgroundColor: ['rgb(255, 192, 203)', 'rgb(176, 226, 255)', 'rgb(196, 255, 219)'],
        hoverOffset: 4
      }]
    };

    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'pie' as ChartType,
        data: data,
        options: {
          plugins: {
            legend: {
              position: 'bottom',
              display: true,
              labels:{
                font:{
                  size: 20
                }
              }
            }
          }
        }
      });
    } else {
      console.error('Canvas element not found');
    }
  }


  private sumNutrient(nutrient: 'proteina' | 'carbohidrato' | 'grasa'): number {
    let total = 0;
    this.comidas.forEach(comida => {
      total += (parseFloat(comida[nutrient]) * parseFloat(comida.cantidad) / 100);
    });
    return total;
  }

  private calculateTotalCalories() {
    let caloriasProteinas = this.sumNutrient('proteina') * 4;
    let caloriasCarbohidratos = this.sumNutrient('carbohidrato') * 4;
    let caloriasGrasas = this.sumNutrient('grasa') * 9;
    this.totalCalorias = (caloriasProteinas + caloriasCarbohidratos + caloriasGrasas) ;
  }

  deleteAlimento(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este alimento de este bloque de comida?');
    if (confirmacion) {
      this.service.deleteAlimento(this.bloqueComida.nombreBloque, id).subscribe({
        next: value => {
          console.log(value);
          this.loadDetalles();
          alert(value.status);
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Done');
        }
      });
    }
  }
}
