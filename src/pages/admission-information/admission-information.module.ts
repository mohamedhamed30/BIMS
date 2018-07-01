import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmissionInformationPage } from './admission-information';

@NgModule({
  declarations: [
    AdmissionInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmissionInformationPage),
  ],
})
export class AdmissionInformationPageModule {}
