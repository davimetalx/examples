import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate, CanLoad {

  constructor() { }

  canActivate(): boolean {
    return false;
  }

  canLoad(): boolean {
    return false;
  }
  
}
