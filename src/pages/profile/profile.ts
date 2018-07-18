import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {NativeStorage} from '@ionic-native/native-storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https: ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userName:string;
  Email:string;
  mob:string;
  smsMob:string;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage,
    public navParams: NavParams,private platform: Platform) {
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
     this.nativeStorage.getItem('user').then(userData => {
       this.userName = userData.UserName;
       this.Email= userData.Email;
       this.mob= userData.Mobile;
       this.smsMob= userData.SMS_Mob;
     });
    }
    else
    {
    this.userName = "BIMS";
    this.Email= "BIMS@BIMS.com";
    this.mob="0100";
    this.smsMob="0100";
    }
  }
  }


