import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/links/link-card/link-card.component';
import { LinkListComponent } from './components/links/link-list/link-list.component';
import { StatsInfoComponent } from './components/stats-info/stats-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LinkCardComponent,
    LinkListComponent,
    StatsInfoComponent,
    HomePageComponent,
  ],
  exports: [HomePageComponent],
  imports: [CommonModule, SharedModule],
})
export class LinkShortenerModule {}
