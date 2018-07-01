import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrPage } from './pr';

@NgModule({
  declarations: [
    PrPage,
  ],
  imports: [
    IonicPageModule.forChild(PrPage),
  ],
})
export class PrPageModule {}
