import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShorteningRedirectionPageComponent } from './link-shortening-redirection-page.component';

describe('LinkShorteningRedirectionPageComponent', () => {
  let component: LinkShorteningRedirectionPageComponent;
  let fixture: ComponentFixture<LinkShorteningRedirectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkShorteningRedirectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkShorteningRedirectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
