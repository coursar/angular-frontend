import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {catchError} from "rxjs/operators";
import {AuthModel} from "../models/auth-model";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const current = this.auth.current;
    if (current !== AuthModel.ANONYMOUS) {
      const cloned = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${current}`,
        },
      });
      return next.handle(cloned).pipe(
        catchError((error: Error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.auth.logout();
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }
}
