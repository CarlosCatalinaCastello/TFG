import {Component, OnInit, ViewChild} from '@angular/core';
import {BloqueComida, Comida, Usuario} from "../../../common/interfaces";
import {DataService} from "../../../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {IonModal} from "@ionic/angular";


@Component({
  selector: 'app-agregar-comida',
  templateUrl: './agregar-comida.page.html',
  styleUrls: ['./agregar-comida.page.scss'],
})
export class AgregarComidaPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

comida!: Usuario;
bloqueComida: BloqueComida[] = [];
comidas: Comida[] = [];


  formComida: FormGroup = this.formbuilder.group({
    bloqueComida: this.formbuilder.group({
      nombreBloque: ['']
    })
  });

  get nombreBloque(){
    return this.formComida.get('nombreBloque');
  }

  constructor(private service: DataService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loadBloqueComida();
  }

  reload(){
    window.location.reload();
  }


  private loadBloqueComida() {
    //this.comida = this.service.usuario;
    this.service.usuario2.subscribe({
      next: value => {
        this.comida = value;
        this.bloqueComida = value.bloqueComida;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      }
    })

    //this.bloqueComida = this.comida.bloqueComida;
    console.log(this.comida)
    console.log(this.bloqueComida)
  }

  addBloqueComida() {
    this.bloqueComida.push(this.formComida.getRawValue()['bloqueComida']);
    const user = {bloqueComida: this.bloqueComida};

    // bloque comida actualizado con todo lo que este en la api
    console.log(user)
    this.service.updateBloqueComida(user, this.comida._id).subscribe({
      next: value => {
        this.loadBloqueComida();
        alert(value.status);
        this.modal.dismiss(null, 'cancel')
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }

  deleteBloqueComida(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este bloque de comida?');
    if (confirmacion) {
      this.service.deleteBloqueComida(id).subscribe({
        next: value => {
          this.loadBloqueComida();
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



  goListComida(id?: string) {
    this.router.navigate(["lista-alimentos/" + id]);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.loadBloqueComida();
  }

  goDetallesComida(id?: string) {
    this.router.navigate(["detalles-comida/" + id]);
  }

}
