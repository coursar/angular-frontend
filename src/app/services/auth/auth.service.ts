import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static readonly ANONYMOUS = 'anonymous';
  private subject$: BehaviorSubject<string>;
  get state(): Observable<string> {
    return this.subject$.asObservable();
  }

  constructor() {
    console.log('init');
    const item = localStorage.getItem('token');
    if (item === null) {
      localStorage.setItem('token', AuthService.ANONYMOUS);
    }
    this.subject$ = new BehaviorSubject<string>(item ?? AuthService.ANONYMOUS);
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.subject$.next(token);
  }

  logout() {
    localStorage.setItem('token', AuthService.ANONYMOUS);
    this.subject$.next(AuthService.ANONYMOUS);
  }
}
