import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RedirectionLinkService } from '../../services/redirection-link.service';
import { GlobalErrorService } from '../../services/global-error.service';

@Component({
  selector: 'app-link-shortening-page',
  templateUrl: './link-shortening-page.component.html',
  styleUrl: './link-shortening-page.component.scss'
})
export class LinkShorteningPageComponent {
  	public sourceUrl: string = "";
	private shortUrl: string = "";
	public returnMessage: string | undefined;

	public form: FormGroup;

	constructor(private clipboard: Clipboard,
		private redirectionLinkService: RedirectionLinkService,
		private globalErrorService: GlobalErrorService,
		private fb: FormBuilder) {
		
		this.form = fb.group({
			url: [ '', [Validators.required, Validators.pattern('https?://.+\..+')]]	
		})
	}

	public GetLink(): void {
		this.redirectionLinkService.CreateLink(this.sourceUrl).subscribe(response => {
      this.shortUrl = window.location.href + response.id;
			this.returnMessage = this.shortUrl;
		});
	}

	public CopyToBufferr(): void {
		if (this.shortUrl) {
			this.clipboard.copy(this.shortUrl);
			
			this.returnMessage = "Copied!";
			setTimeout(() => {
				this.returnMessage = this.shortUrl;
			}, 2000);
		}
	}
}
