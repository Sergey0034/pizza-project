import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor() { }

  public isLogged$: Subject<boolean> = new Subject<boolean>();
  private isLogged = false;

  logIn() {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  getToken() {
    return 'test';
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }
}
