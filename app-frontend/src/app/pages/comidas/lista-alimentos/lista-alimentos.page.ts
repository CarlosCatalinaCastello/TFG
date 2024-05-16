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

  comidas: Comida[] = [];
  user!: Usuario;

  bloqueComida!: BloqueComida;
  bloqueComidas: BloqueComida[] = [];

  alimentos: Alimentos[] = [];
  alimento!: Alimentos;
  isModalOpen: boolean = false;


  formComida: FormGroup = this.formbuilder.group({
    bloqueComida: this.formbuilder.group({
      _id:[''],
      nombreBloque: [''],
      comida: this.formbuilder.group({
        nombre: [''],
        tipo: [''],
        descripcion: [''],
        img: [''],
        grasa: [''],
        proteina: [''],
        carbohidrato: [''],
        cantidad: ['']
      })
    })
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
  get cantidad() {
    return this.formComida.get('cantidad');
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
    this.bloqueComidas.forEach((bloqueComida: BloqueComida) => {
      if (bloqueComida.nombreBloque === this.bloqueComida.nombreBloque){
        bloqueComida.comida.push(this.formComida.getRawValue()['bloqueComida']['comida']);
      }
    })

    const user = {bloqueComida: this.bloqueComidas};

    // comida actualizado con todo lo que este en la api
    this.service.updateAlimentos(user, this.user._id).subscribe({
      next: value => {
        alert(value.status);
        this.modal.dismiss(null, 'aceptar');
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }


  loadAlimento(alimento: Alimentos) {
    this.formComida.get('bloqueComida.nombreBloque')?.setValue(this.bloqueComida.nombreBloque);
    this.formComida.get('bloqueComida._id')?.setValue(this.id);
    this.formComida.get('bloqueComida.comida')?.patchValue(alimento);

    this.isModalOpen = true;
    this.user = this.service.usuario;
    this.bloqueComidas = this.user.bloqueComida;

  }


  private loadAlimentos() {
    this.service.getAlimentos().subscribe({
      next: value => {
        this.alimentos = value;
        console.log(this.alimentos)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('Get Alimentos')
      }
    })

    this.service.getOneBloque(this.id).subscribe({
      next: value => {
        this.bloqueComida = value;
        console.log(this.bloqueComida.nombreBloque)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('Get Bloques')
      }
    })
  }

  goFormAlimento(id?: string) {
    this.router.navigate(["formulario-alimentos/" + id]);
  }

  buscar(event: any){
    this.filtroAlimento = event.detail.value;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }
}
