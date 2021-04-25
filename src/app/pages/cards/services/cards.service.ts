import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private firebase: AngularFireDatabase) {
  }

  getData(): any {
    const res = this.firebase.list('cards').snapshotChanges();

    return res;
  }

  addData(data: Card): any {
    return this.firebase.list('/cards').push(data);
  }

  editCard(id: string, data: Card): void {
    this.firebase.list('/cards').update(id, data);
  }

  removeCard(id: string): void {
    this.firebase.list('/cards').remove(id);
  }
}
