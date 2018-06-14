import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabOneRoutingModule } from './tab-one.routing';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabOneRoutingModule,
    IonicModule
  ],
  declarations: [TabOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabOneModule { }
