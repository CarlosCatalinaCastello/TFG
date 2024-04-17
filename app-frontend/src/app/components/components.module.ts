import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "./menu/menu.component";
import {RouterLink} from "@angular/router";
import {NavbarComponent} from "./navbar/navbar.component";
import {NavbarAvatarComponent} from "./navbar-avatar/navbar-avatar.component";

@NgModule({
  declarations: [MenuComponent, NavbarComponent, NavbarAvatarComponent],
  exports:[ MenuComponent, NavbarComponent, NavbarAvatarComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ]
})

export class ComponentsModule {

}
