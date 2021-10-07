import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthModel} from "../../models/auth-model";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  @Input() object?: {ownerId: number};
  subscription$?: Subscription;
  principal?: AuthModel;
  get authorized() {
    debugger;
    return this.object?.ownerId === this.principal?.id;
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
