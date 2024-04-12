import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css',
})
export class LinkCardComponent {
  @Input()
  public name: string = 'Link name';

  @Input()
  public url: string = 'url';
}
