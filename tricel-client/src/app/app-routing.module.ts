import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './link-shortener/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [{ path: 'home', component: HomePageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
