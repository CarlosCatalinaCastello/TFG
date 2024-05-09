import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Alimentos} from "../../../common/alimentos";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BloqueComida, bloqueEnviar, Comida, Usuario} from "../../../common/interfaces";
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
      nombreBloque: [''],
      comida: this.formbuilder.group({
        _id: [''],
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
    console.log(this.formComida.getRawValue())
    this.bloqueComidas.push(this.formComida.getRawValue()['bloqueComida']);
    const user = {bloqueComida: this.bloqueComidas};
    console.log(this.formComida.getRawValue())

    // comida actualizado con todo lo que este en la api

    this.service.updateAlimentos(user, this.user._id).subscribe({
      next: value => {
        alert(value.status);
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
    const comidaFormGroup = this.formComida.get('bloqueComida.comida') as FormGroup;
    comidaFormGroup.patchValue(alimento);
    this.isModalOpen = true;
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

    this.service.getOneBloque(this.id).subscribe({
      next: value => {
        this.bloqueComida = value;
        console.log(this.bloqueComida.nombreBloque)
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
    this.isModalOpen = false;
  }
}
