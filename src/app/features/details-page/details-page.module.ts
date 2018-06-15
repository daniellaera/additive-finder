import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page.routing';
import { DetailsPageComponent } from './containers/details-page/details-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsPageModule { }
