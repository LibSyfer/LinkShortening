import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkShorteningPageComponent } from './pages/link-shortening-page/link-shortening-page.component';
import { LinkShorteningRedirectionPageComponent } from './pages/link-shortening-redirection-page/link-shortening-redirection-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: "not-found", title: "Not found", component: NotFoundPageComponent },
  { path: "", title: "Link shortening", component: LinkShorteningPageComponent },
  { path: ":id", component: LinkShorteningRedirectionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
