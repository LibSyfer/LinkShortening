import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkShorteningPageComponent } from './pages/link-shortening-page/link-shortening-page.component';
import { LinkShorteningRedirectionPageComponent } from './pages/link-shortening-redirection-page/link-shortening-redirection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkShorteningPageComponent,
    LinkShorteningRedirectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
