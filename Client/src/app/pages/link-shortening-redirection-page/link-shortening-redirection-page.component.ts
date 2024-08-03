import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectionLinkService } from '../../services/redirection-link.service';
import { catchError, EMPTY } from 'rxjs';
import { GlobalErrorService } from '../../services/global-error.service';

@Component({
  selector: 'app-link-shortening-redirection-page',
  template: ''
})
export class LinkShorteningRedirectionPageComponent {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private redirectionLinkService: RedirectionLinkService,
    private globalErrorService: GlobalErrorService) {}

    ngOnInit() {
      const id: string | null = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.redirectionLinkService.GetLink(id).pipe(
          catchError(err => {
            this.router.navigate(['not-found'])
            return EMPTY;
          })
        ).subscribe(response => {
          window.location.href = response.sourceLink
        })
      }
  }
}
