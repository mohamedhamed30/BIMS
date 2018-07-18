import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import {DataProvider} from'../../Providers/dataProvider';
import { NativeStorage } from '@ionic-native/native-storage';



/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  data: any;
  loading;
   userNAme :string;
   pass :string; 
   token_ID:Number;

  constructor(public navCtrl: NavController,private platform: Platform,private nativeStorage: NativeStorage, private loadingCtrl: LoadingController,private toastCtrl: ToastController , public navParams: NavParams,private provider:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  signIn() {

    this.loading = this.creatLoading();
    this.loading.present();

    if (this.platform.is('cordova')) {
      this.nativeStorage.getItem('token').then(token => {
        this.token_ID = token.TokenID;
      });
    }
    else
    {
      this.token_ID =0;
      
    }

this.provider.signIn(this.userNAme,this.pass,this.token_ID)
.subscribe(response=>
  {
    this.data = response.json();
    if (this.data['isUser']) {
      if (this.platform.is('cordova')) {
      this.nativeStorage.setItem('user', this.data).then(()=>
      {
        this.loading.dismiss().then(() => {
        this.CreateToast('Login Successfully!!');
        this.navCtrl.setRoot(HomePage);
        });
      });
    }
    else
    {
      this.loading.dismiss().then(() => {
        this.CreateToast('Login Successfully!!');
        this.navCtrl.setRoot(HomePage);
      });
    }
    }
    else
    {
      this.CreateToast('Login Failed!!');
      this.navCtrl.setRoot(HomePage);
    }
  }
);

    
  }


  creatLoading() {
    return this.loadingCtrl.create({
        content: 'Please wait...',
        spinner: 'dots',
        dismissOnPageChange: true
    })
}


CreateToast(Msg) {
  this.toastCtrl.create({
      message: Msg,
      duration: 5000,
      position: 'bottom'
  })

      .present();

}

}
