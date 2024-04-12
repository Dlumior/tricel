import { Component } from '@angular/core';
import { LinkShortenerService } from '../../../services/link-shortener.service';

@Component({
  selector: 'link-shortener-link-list',
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.css',
})
export class LinkListComponent {
  constructor(private linkService: LinkShortenerService) {}

  get links() {
    return [...this.linkService.links];
  }
}
