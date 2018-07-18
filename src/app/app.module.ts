

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {Http,HttpModule} from "@angular/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us';
import { BimsEventsPage } from '../pages/bims-events/bims-events';
import { BimsTourPage } from '../pages/bims-tour/bims-tour';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { LogInPage } from '../pages/log-in/log-in';
import { PhotoGalleryPage } from '../pages/photo-gallery/photo-gallery';
import { PrPage } from '../pages/pr/pr';
import { ProfilePage } from '../pages/profile/profile';
import { VideoGalleryPage } from '../pages/video-gallery/video-gallery';
import { AdmissionInformationPage } from '../pages/admission-information/admission-information';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';
import { NativeStorage } from '@ionic-native/native-storage';
import { DataProvider } from '../Providers/dataProvider';
import { Common } from '../Providers/common';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUsPage,
    BimsEventsPage,
    BimsTourPage,
    ContactUsPage,
    FacilitiesPage,
    LogInPage,
    PhotoGalleryPage,
    PrPage,
    ProfilePage,
    VideoGalleryPage,
    AdmissionInformationPage,
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    AboutUsPage,
    BimsEventsPage,
    BimsTourPage,

    ContactUsPage,
    FacilitiesPage,
    LogInPage,
    PhotoGalleryPage,
    PrPage,
    ProfilePage,
    VideoGalleryPage,
    AdmissionInformationPage
  ],
  providers: [
    FCM,
   NativeStorage , 
    DataProvider,
Common,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
