import { Component, EventEmitter, Output } from '@angular/core';
import { BaseLink } from '../../../link-shortener/interfaces/link.interface';
import { LinkShortenerService } from '../../../link-shortener/services/link-shortener.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private linkShortenerService: LinkShortenerService) {}

  @Output()
  public onNewLink: EventEmitter<BaseLink> = new EventEmitter();

  public link: BaseLink = {
    name: 'Link',
    url: '',
    short_url: '',
  };

  public addLink(): void {
    this.linkShortenerService.addLink(this.link);
  }

  public emitLink(): void {
    if (this.link.url.length === 0) return;

    this.onNewLink.emit(this.link);

    this.link = {
      name: 'Link',
      url: '',
      short_url: '',
    };
  }
}
