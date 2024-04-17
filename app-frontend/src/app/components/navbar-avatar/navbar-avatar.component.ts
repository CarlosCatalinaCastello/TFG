import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-navbar-avatar',
  templateUrl: './navbar-avatar.component.html',
  styleUrls: ['./navbar-avatar.component.scss'],
})
export class NavbarAvatarComponent  implements OnInit {
  avatar!: Usuario;
  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.loadAvatar();
  }

  private loadAvatar() {
    this.avatar = this.service.usuario;
  }
}
