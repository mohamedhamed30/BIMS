import { DataProvider } from './../../Providers/dataProvider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import { AboutUsPage } from '../about-us/about-us';
import { BimsEventsPage } from '../bims-events/bims-events';
import { BimsTourPage } from '../bims-tour/bims-tour';
import { ContactUsPage } from '../contact-us/contact-us';
import { FacilitiesPage } from '../facilities/facilities';
import { PhotoGalleryPage } from '../photo-gallery/photo-gallery';
import { PrPage } from '../pr/pr';
import { ProfilePage } from '../profile/profile';
import { VideoGalleryPage } from '../video-gallery/video-gallery';
import { AdmissionInformationPage } from '../admission-information/admission-information';
import { NativeStorage } from '@ionic-native/native-storage';
import { ToastController,Platform } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
data:any;
check;

  constructor(public navCtrl: NavController
    ,private platform: Platform
    ,private fcm: FCM
    ,private nativeStorage: NativeStorage
    ,private toastCtrl: ToastController
    ,private provider:DataProvider) {

  }

  ionViewDidLoad() {
  
    if (this.platform.is('cordova')) {
       this.fireBaseMessages();
    }
  }

  logInPage() {
    this.navCtrl.push(LogInPage)
  }


  OpenAboutUs() {
    this.navCtrl.push(AboutUsPage)
  }

  OpenBIMSEvents() {
    this.navCtrl.push(BimsEventsPage)
  }

  OpenAdmissionInformation() {
    this.navCtrl.push(AdmissionInformationPage)
  }

  OpenFacilities() {
    this.navCtrl.push(FacilitiesPage)
  }

  OpenPhotosGallary() {
    this.navCtrl.push(PhotoGalleryPage)
  }

  OpenVideosGallary() {
    this.navCtrl.push(VideoGalleryPage)
  }

  OpenBIMSTour() {
    this.navCtrl.push(BimsTourPage)
  }

  OpenContactUs() {
    this.navCtrl.push(ContactUsPage)
  }

  OpenPR() {
    this.navCtrl.push(PrPage)
  }
  OpenProfile(){
    if (this.platform.is('cordova')) {
    this.nativeStorage.getItem('user').then(user=>{
        
    this.navCtrl.push(ProfilePage);
    }).catch(()=>{
      this.navCtrl.push(LogInPage);
    });
  }
  else
  {
    this.navCtrl.push(ProfilePage);
  }
  }
  
  OpenLogInPage(){
    
    this.navCtrl.push(LogInPage)
  }

  fireBaseMessages(){
    this.fcm.getToken().then(token => {
    
      this.nativeStorage.getItem('token').then(user=>{
        
        this.check = user;
        this.CreateToast(this.check.token_ID);
      }).catch(()=>{
        this.provider.SaveToken(token,this.platform.is('android'))
      
      .subscribe(response=>
        {

          this.data = response.json();
          
          if (this.platform.is('cordova')) {
           this.nativeStorage.setItem('token',this.data).then(()=>
            {
           
               
            });
        
     

          }
        } );
      
      });
        
                   
    
      
     
    });
     
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });
    
    this.fcm.onTokenRefresh().subscribe(token => {
   //   backend.registerToken(token);
   this.provider.SaveToken(token,this.platform.is('cordova'))
.subscribe(response=>
  {
    this.data = response.json();
    
    if (this.platform.is('cordova')) {
      this.nativeStorage.setItem('token', this.data).then(()=>
      {
       
       
      });
    }
  });
    });
    
  }

  CreateToast(msg) {
    this.toastCtrl.create({
        message:msg,
        duration: 5000,
        position: 'bottom'
    })
  
        .present();
  
  }
}

