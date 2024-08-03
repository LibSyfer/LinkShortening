import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkShorteningPageComponent } from './pages/link-shortening-page/link-shortening-page.component';
import { LinkShorteningRedirectionPageComponent } from './pages/link-shortening-redirection-page/link-shortening-redirection-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkShorteningPageComponent,
    LinkShorteningRedirectionPageComponent,
    NotFoundPageComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ provideHttpClient(withInterceptorsFromDi()), { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
