import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Components } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Components[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
