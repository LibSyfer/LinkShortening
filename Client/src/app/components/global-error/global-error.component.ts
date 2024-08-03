import { Component, Input } from '@angular/core';
import { GlobalErrorService } from '../../services/global-error.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrl: './global-error.component.scss'
})
export class GlobalErrorComponent {
  public errors$: Observable<string[]>;

  constructor(public readonly globalErrorService: GlobalErrorService) {
    this.errors$ = this.globalErrorService.errors$();
  }
}
