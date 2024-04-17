import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() titulo!: string;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {}

}
