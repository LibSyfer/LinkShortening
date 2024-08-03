import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorService {
  private errors: string[] = [];
  private readonly errorsSubject$ = new Subject<Array<string>>();
  private readonly timeout = 5000;

  public errors$(): Observable<string[]> {
    return this.errorsSubject$.asObservable();
  }

  public showError(errorMessage: string): void {
    this.errors.push(errorMessage);
    this.errorsSubject$.next([...this.errors]);

    setTimeout(() => {
      this.removeFirstError();
    }, this.timeout)
  }

  private removeFirstError() {
    this.errors.shift();
    this.errorsSubject$.next([...this.errors]);
  }
}
