import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-serachbar',
  templateUrl: './serachbar.page.html',
  styleUrls: ['./serachbar.page.scss'],
})
export class SerachbarPage implements OnInit {

  albums: any[] = [];
  searchText = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(resp => {
      this.albums = resp;
    });
  }

  onSearchChange(event) {
    this.searchText = event.detail.value;
  }

}
