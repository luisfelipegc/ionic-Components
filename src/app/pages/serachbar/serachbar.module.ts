import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerachbarPageRoutingModule } from './serachbar-routing.module';

import { SerachbarPage } from './serachbar.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SerachbarPageRoutingModule
  ],
  declarations: [SerachbarPage]
})
export class SerachbarPageModule {}
