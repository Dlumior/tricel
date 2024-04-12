import { Injectable } from '@angular/core';
import { BaseLink, Link } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root',
})
export class LinkShortenerService {
  constructor() {}

  public links: Link[] = [];

  public addLink(link: BaseLink) {
    this.links.unshift({
      id: crypto.randomUUID(),
      lifetime: new Date(),
      visibility: 'Public',
      ...link,
    });
  }

  public removeLink(id: string) {
    this.links = this.links.filter((item) => item.id !== id);
  }
}
