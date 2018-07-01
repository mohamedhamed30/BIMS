import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BimsEventsPage } from './bims-events';

@NgModule({
  declarations: [
    BimsEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(BimsEventsPage),
  ],
})
export class BimsEventsPageModule {}
