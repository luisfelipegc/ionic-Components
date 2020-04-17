import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list', {static: false}) list: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this. usuarios = this.dataService.getUsers();
  }

  favorite(item) {
    console.log('Favorite', item);
    this.list.closeSlidingItems();
  }

  share(item) {
    console.log('Share', item);
    this.list.closeSlidingItems();
  }

  delete(item) {
    console.log('Delete', item);
    this.list.closeSlidingItems();
  }
}
