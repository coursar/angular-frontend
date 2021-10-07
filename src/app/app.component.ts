import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {Observable, Subscription} from "rxjs";
import {AuthModel} from "./models/auth-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit, OnDestroy {
  subscription$?: Subscription;
  principal?: AuthModel;

  constructor(private auth: AuthService) {
    this.subscription$ = auth.state.subscribe(
      auth => this.principal = auth,
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }

  onLogin() {
    this.auth.login('top-secret');
  }

  onLogout() {
    this.auth.logout();
  }
}
