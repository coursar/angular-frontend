import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {PurchaseDto} from "../../dto/purchase-dto";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  private subject$ = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  getReload(): Observable<boolean> {
    return this.subject$.asObservable();
  }

  getAll(): Observable<PurchaseDto[]> {
    return this.http.get<PurchaseDto[]>(`${environment.apiUrl}/purchases`);
  }

  save(item: PurchaseDto): Observable<PurchaseDto> {
    return this.http.post<PurchaseDto>(`${environment.apiUrl}/purchases`, item)
      .pipe(
        tap(() => this.subject$.next(true))
      );
  }
}
