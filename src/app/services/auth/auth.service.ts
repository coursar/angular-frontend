import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AuthModel} from "../../models/auth-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject$: BehaviorSubject<AuthModel>;
  get state(): Observable<AuthModel> {
    return this.subject$.asObservable();
  }
  get current(): AuthModel {
    return this.subject$.getValue();
  }

  constructor() {
    console.log('init');
    const saved = localStorage.getItem('token');
    const item = saved === null ? AuthModel.ANONYMOUS : AuthService.decode(saved);
    if (item !== AuthModel.ANONYMOUS) {
      localStorage.setItem('token', JSON.stringify(AuthModel.ANONYMOUS));
    }
    this.subject$ = new BehaviorSubject<AuthModel>(item);
  }

  private static decode(saved: string): AuthModel {
    try {
      return JSON.parse(saved) as AuthModel;
    } catch (e) {
      return AuthModel.ANONYMOUS;
    }
  }

  login(token: string) {
    // TODO: http request
    const item = token === 'anonymous' ? AuthModel.ANONYMOUS : new AuthModel(1, 'admin', token, ['ROLE_ADMIN']);

    localStorage.setItem('token', JSON.stringify(item));
    if (token !== this.subject$.getValue().token) {
      this.subject$.next(item);
    }
  }

  logout() {
    localStorage.setItem('token', JSON.stringify(AuthModel.ANONYMOUS));
    this.subject$.next(AuthModel.ANONYMOUS);
  }
}
