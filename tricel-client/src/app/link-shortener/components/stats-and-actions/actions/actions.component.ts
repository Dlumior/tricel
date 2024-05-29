import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { NewLinkDialogComponent } from '../new-link-dialog/new-link-dialog.component';

@Component({
  selector: 'link-shortener-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css',
})
export class ActionsComponent {
  name: string = '';

  constructor(public dialog: Dialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(NewLinkDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
