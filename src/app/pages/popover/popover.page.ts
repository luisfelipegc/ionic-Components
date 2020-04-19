import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private PopoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPop(event) {

    const popover = await this.PopoverCtrl.create({
      component: PopinfoComponent,
      event,
      mode : 'ios',
      backdropDismiss: false
    });
    await popover.present();
    const {data} = await popover.onDidDismiss(); // recibe la info desde el popover
    // const {data} = await popover.onWillDismiss();  recibe la info desde el popover mas rapido que arriba
    console.log(data);
  }

}
