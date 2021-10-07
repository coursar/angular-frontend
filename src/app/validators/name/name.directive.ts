import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {ValidationDto} from "../../dto/validation-dto";

@Directive({
  selector: '[appName]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: NameDirective,
    multi: true,
  }],
})
export class NameDirective implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if (control.value === '') {
      return of(null);
    }

    return this.http.get<ValidationDto>(`${environment.apiUrl}/validate?name=${encodeURIComponent(control.value)}`)
      .pipe(
        // {status: 'ok'} | {status: 'error'}
        map(o => o?.status === 'error' ? {appName: 'invalid'} : null)
      )
      ;
  }
}
