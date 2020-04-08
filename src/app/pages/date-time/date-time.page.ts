import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  // Trabajar fechas con la librería momentjs

  fechaNaci: Date = new Date();
  CustomPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.CustomPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
          
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss');
          return false;
        }
      }]
    };
  }

  cambioFecha(fecha) {
    console.log(fecha);
  }

}
