import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthModel} from "../../models/auth-model";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit, OnDestroy {
  @Input() roles: string[] = [];
  subscription$?: Subscription;
  principal?: AuthModel;
  get authorized() {
    if (this?.roles?.length === 0) {
      return true;
    }
    return this?.roles.some(o => this.principal?.roles?.includes(o));
  }

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
