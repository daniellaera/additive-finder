import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './containers/details-page/details-page.component';

const routes: Routes = [
  {
    path: ':enumber',
    component: DetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPageRoutingModule { }
