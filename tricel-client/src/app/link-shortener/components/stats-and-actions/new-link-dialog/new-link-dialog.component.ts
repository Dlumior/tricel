import { Component, Inject } from '@angular/core';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
import { NewLinkDialogData } from '../../../interfaces/new-link-dialaog.interface';

@Component({
  selector: 'link-shortener-new-link-dialog',
  templateUrl: './new-link-dialog.component.html',
  styleUrl: './new-link-dialog.component.css',
})
export class NewLinkDialogComponent {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: NewLinkDialogData
  ) {}
}
