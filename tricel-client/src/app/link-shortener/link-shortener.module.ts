import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/links/link-card/link-card.component';
import { LinkListComponent } from './components/links/link-list/link-list.component';
import { StatsInfoComponent } from './components/stats-info/stats-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { LinkShortenerRoutingModule } from './link-shortener-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';

@NgModule({
  declarations: [
    LinkCardComponent,
    LinkListComponent,
    StatsInfoComponent,
    HomePageComponent,
    ConfigurationPageComponent,
    DashboardLayoutComponent,
  ],
  exports: [],
  imports: [CommonModule, SharedModule, LinkShortenerRoutingModule],
})
export class LinkShortenerModule {}
