import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject$ = new ReplaySubject<string>(10);

  constructor() {
  }

  getData(): Observable<string> {
    return this.subject$.asObservable();
  }

  passData(item: string) {
    this.subject$.next(item);
  }
}
