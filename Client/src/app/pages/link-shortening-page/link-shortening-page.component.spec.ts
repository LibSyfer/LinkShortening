import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShorteningPageComponent } from './link-shortening-page.component';

describe('LinkShorteningPageComponent', () => {
  let component: LinkShorteningPageComponent;
  let fixture: ComponentFixture<LinkShorteningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkShorteningPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkShorteningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
