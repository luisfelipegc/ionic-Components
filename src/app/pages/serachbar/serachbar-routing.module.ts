import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerachbarPage } from './serachbar.page';

const routes: Routes = [
  {
    path: '',
    component: SerachbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerachbarPageRoutingModule {}
