import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page.routing';
import { DetailsPageComponent } from './containers/details-page/details-page.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPageComponent]
})
export class DetailsPageModule { }
