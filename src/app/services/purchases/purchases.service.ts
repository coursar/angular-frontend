import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, Subject, Subscription} from "rxjs";
import {PurchaseDto} from "../../dto/purchase-dto";
import {environment} from "../../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {distinct, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PurchasesService implements OnDestroy {
  private items$ = new Subject<PurchaseDto[]>();
  private auth$: Subscription;
  get state() {
    return this.items$;
  }

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth$ = auth.state
      .pipe(
        // distinct(),
        switchMap(o => this.getAll())
      )
      .subscribe(
        value => {
          console.log(value);
          this.items$.next(value)
        }
      );
  }

  ngOnDestroy() {
    this.items$.complete();
    this.auth$.unsubscribe();
  }

  private getAll(): Observable<PurchaseDto[]> {
    return this.http.get<PurchaseDto[]>(`${environment.apiUrl}/purchases`);
  }

  save(item: PurchaseDto): Observable<PurchaseDto> {
    // FIXME:
    return of(new PurchaseDto(0, '', 0));
    // return this.http.post<PurchaseDto>(`${environment.apiUrl}/purchases`, item)
    //   .pipe(
    //     tap(() => this.subject$.next(true))
    //   );
  }
}
