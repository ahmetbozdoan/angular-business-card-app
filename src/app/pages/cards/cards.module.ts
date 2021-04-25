import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CardsRoutingModule} from './cards-routing.module';
import {CardsComponent} from './cards.component';

import {FlexLayoutModule} from "@angular/flex-layout";

import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

import {CardItemComponent} from './components/card-item/card-item.component';
import {MatInputModule} from "@angular/material/input";

import {CardDialogComponent} from './components/card-dialog/card-dialog.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardDialogComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CardsModule {
}
