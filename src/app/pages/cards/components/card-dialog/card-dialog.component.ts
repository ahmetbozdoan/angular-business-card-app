import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {CardsService} from "../../services/cards.service";

import {Card} from "../../models/card";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  cardForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CardDialogComponent>,
    private snackBar: MatSnackBar,
    private cardsService: CardsService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {

  }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || "", Validators.required],
      job: [this.data?.job || "", Validators.required],
      tel: this.data?.tel || "",
      email: [this.data?.email || "", Validators.email],
      adress: this.data?.adress || "",
    });
  }

  addCard(): void {
    this.cardsService.addData(this.cardForm.value);
    this.snackBar.open("Kartvizit Başarıyla Eklendi.", "", {duration: 1500});
    this.dialogRef.close();
  }

  editCard(): void {
    console.error("enter..");
    this.cardsService.editCard(this.data.id, this.cardForm.value);
    this.snackBar.open("Kartvizit Başarıyla Düzenlendi.", "", {duration: 1500});
    this.dialogRef.close();
  }

  removeCard(): void {
    this.cardsService.removeCard(this.data.id);
    this.snackBar.open("Kartvizit Başarıyla Silindi.", "", {duration: 1500});
    this.dialogRef.close();
  }

}
