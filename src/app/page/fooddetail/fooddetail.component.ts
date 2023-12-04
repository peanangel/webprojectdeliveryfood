import { Component,inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.scss']
})
export class FooddetailComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
