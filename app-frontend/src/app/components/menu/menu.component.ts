import { Component, OnInit } from '@angular/core';
import {MenuLateral} from "../../common/menu-lateral";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  menu: MenuLateral[] = [];
  constructor(private service: DataService, private router: Router) {
  }

  ngOnInit(){
    this.cargarMenu()
  }


  private cargarMenu() {
    this.service.getMenuLateral().subscribe({
      next: value => {
        this.menu = value;
      },
      error: err => {
        console.log('Error')
      },
      complete: () => {
        console.log('Done')
      }
    })
  }

  logout() {
    this.service.token = '';
    localStorage.clear();
    this.router.navigateByUrl('/inicio');
  }
}
