import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-alimentos',
  templateUrl: './lista-alimentos.page.html',
  styleUrls: ['./lista-alimentos.page.scss'],
})
export class ListaAlimentosPage implements OnInit {
id!: string;
  constructor(private service: DataService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe(params =>{
      this.id = params['id']
    });
  }

}
