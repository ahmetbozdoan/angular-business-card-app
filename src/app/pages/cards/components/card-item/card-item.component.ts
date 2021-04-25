import {Component, OnInit, Input} from '@angular/core';
import {Card} from "../../models/card";
import {CardDialogComponent} from "../card-dialog/card-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) {
  }

  @Input() data!: Card;

  ngOnInit(): void {

  }

  editCard(): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data: this.data,
      width: '450px'
    });
  }

}
