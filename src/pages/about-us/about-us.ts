import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private fcm: FCM) {
  }

  ionViewDidLoad() {
    this.fcm.getToken().then(token => {
    //  backend.registerToken(token);
    });
    
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        alert("Received in background");
      } else {
        alert("Received in foreground");
      };
    });
    
    this.fcm.onTokenRefresh().subscribe(token => {
     // backend.registerToken(token);
    });
    
  }

}
