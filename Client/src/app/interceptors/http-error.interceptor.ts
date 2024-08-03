import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { GlobalErrorService } from '../services/global-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private globalErrorService: GlobalErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMessage;
        switch(err.status) {
          case 400:
            errorMessage = "Bad reauest."
            break;
          case 404:
            errorMessage = "Not found."
            break;
          default:
            errorMessage = "Server error."
        }

        this.globalErrorService.showError(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
