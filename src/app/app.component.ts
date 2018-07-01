import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us';
import { BimsEventsPage } from '../pages/bims-events/bims-events';
import { BimsTourPage } from '../pages/bims-tour/bims-tour';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { PhotoGalleryPage } from '../pages/photo-gallery/photo-gallery';
import { PrPage } from '../pages/pr/pr';
import { VideoGalleryPage } from '../pages/video-gallery/video-gallery';
import { AdmissionInformationPage } from '../pages/admission-information/admission-information';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any , Icon:string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About Us', component: AboutUsPage , Icon:"md-school" },
      { title: 'BIMS Events', component: BimsEventsPage , Icon:"md-clock" },
      { title: 'Admission details', component: AdmissionInformationPage , Icon:"md-information-circle" },
      { title: 'Facilities', component: FacilitiesPage , Icon: "md-trending-up"},
      { title: 'Photos Gallary', component: PhotoGalleryPage , Icon:"md-images"},
      { title: 'Videos Gallary', component: VideoGalleryPage , Icon:"logo-youtube" },
      { title: 'BIMS Tour', component: BimsTourPage , Icon:"md-videocam" },
      { title: 'Contact Us', component: ContactUsPage , Icon:"md-call" },
      { title: 'PR', component: PrPage , Icon:"md-mail"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
    


  }
}
