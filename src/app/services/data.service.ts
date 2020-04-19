import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Components } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<Components[]>('/assets/data/menu.json');
  }

  getHeroes() {
    return this.http.get<Components[]>('/assets/data/superheroes.json')
    .pipe(
      delay(1500)
    );
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
