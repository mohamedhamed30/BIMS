import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BimsTourPage } from './bims-tour';

@NgModule({
  declarations: [
    BimsTourPage,
  ],
  imports: [
    IonicPageModule.forChild(BimsTourPage),
  ],
})
export class BimsTourPageModule {}
