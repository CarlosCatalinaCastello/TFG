import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Alimentos} from "../../../common/alimentos";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BloqueComida, Comida, Usuario} from "../../../common/interfaces";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-lista-alimentos',
  templateUrl: './lista-alimentos.page.html',
  styleUrls: ['./lista-alimentos.page.scss'],
})
export class ListaAlimentosPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  filtroAlimento= '';

  id!: string;
  comida: Comida[] = [];
  user!: Usuario;
  bloqueComida!: BloqueComida;

  alimentos: Alimentos[] = [];


  formComida: FormGroup = this.formbuilder.group({
    _id: [''],
    nombre: [''],
    tipo: [''],
    descripcion: [''],
    img: [''],
    proteina: [''],
    carbohidrato: [''],
    grasa: ['']
  });

  //Getters
  get nombre(): any {
    return this.formComida.get('nombre');
  }

  get tipo(): any {
    return this.formComida.get('tipo');
  }

  get img(): any {
    return this.formComida.get('img');
  }

  get proteina(): any {
    return this.formComida.get('proteina');
  }

  get grasa(): any {
    return this.formComida.get('grasa');
  }

  get carbohidrato(): any {
    return this.formComida.get('carbohidrato');
  }

  get descripcion(): any {
    return this.formComida.get('descripcion');
  }


  constructor(private service: DataService, private ruta: ActivatedRoute, private formbuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.id = params['id']
    });

    this.loadAlimentos();
  }

  addAlimento() {
    this.service.addAlimento(this.formComida.getRawValue()).subscribe({
      next: value => {
        this.loadAlimentos();
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


  private loadAlimentos() {
    this.service.getAlimentos().subscribe({
      next: value => {
        this.alimentos = value;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('Get Alimentos')
      }
    })
  }

  goFormAlimento(id?: string) {
    this.router.navigate(["formulario-alimentos/" + id]);
  }

  buscar(event: any){
    console.log(event)
    this.filtroAlimento = event.detail.value;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
