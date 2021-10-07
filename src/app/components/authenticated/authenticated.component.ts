import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthModel} from "../../models/auth-model";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit, OnDestroy {
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
}
