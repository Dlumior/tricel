import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/links/link-card/link-card.component';
import { LinkListComponent } from './components/links/link-list/link-list.component';
import { StatsInfoComponent } from './components/stats-info/stats-info.component';

@NgModule({
  declarations: [LinkCardComponent, LinkListComponent, StatsInfoComponent],
  exports: [LinkListComponent, StatsInfoComponent],
  imports: [CommonModule],
})
export class LinkShortenerModule {}
