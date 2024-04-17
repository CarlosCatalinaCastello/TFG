import {CanMatchFn, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {inject} from "@angular/core";


// @ts-ignore
export const userGuard: CanMatchFn = (route: Router, state: any) => {
  const userService = inject(DataService)
  return userService.validaToken();
};
