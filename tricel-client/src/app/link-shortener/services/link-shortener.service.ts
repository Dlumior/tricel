import { Injectable } from '@angular/core';
import { BaseLink, Link, LinkRootObject } from '../interfaces/link.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LinkShortenerService {
  private BASE_API = 'http://localhost:8000';
  private BASE_PATH = 'link-shortener/api/v1';
  private SPECIFIC_PATH = 'links/';
  public links: Link[] = [];

  constructor(private http: HttpClient) {
    const options = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer 3bc980669de16073da7503b0f6640f1689803cd3`
      ),
      params: new HttpParams()
        .set('page', 1)
        .set('page_size', 3)
        .set('visibility', 'Public'),
    };

    this.http
      .get<LinkRootObject>(
        `${this.BASE_API}/${this.BASE_PATH}/${this.SPECIFIC_PATH}`,
        options
      )
      .subscribe((resp) => {
        this.links = resp.results;
      });
  }

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
