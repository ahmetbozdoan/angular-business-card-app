import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardDialogComponent} from "./components/card-dialog/card-dialog.component";
import {CardsService} from "./services/cards.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private cardsService: CardsService,
  ) {
  }

  search: string = "";
  datas: any;
  tempDatas: any;

  ngOnInit(): void {
    this.getData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '450px',
      disableClose: true
    });
  }

  getData(): void {
    this.cardsService.getData().subscribe(actions => {
      this.datas = [];
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.datas.push({id, ...value});
      });

      this.tempDatas = this.datas;
    });
  }

  searchChange(): void {
    this.datas = this.tempDatas.filter(data => data.name.toLocaleLowerCase().search(this.search.toLocaleLowerCase()) !== -1);

    if (!this.search) this.datas = this.tempDatas;
  }
}
