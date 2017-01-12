import { Component } from '@angular/core';

import { NavController, Platform, AlertController } from 'ionic-angular';
import { EmailComposer } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
    
  }

  onSendEmailClicked(): void {
    console.log("onSendEmailClicked()");

    if (!this.platform.is('cordova')) {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Not a Cordova platform!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    EmailComposer.isAvailable().then((available: boolean) =>{
      console.log("available: " + available); // It seems 'available' is undefined
      // if(!available) {
        let email = {
          to: 'jdwei@hotmail.com',
          // cc: 'erika@mustermann.de',
          // bcc: ['john@doe.com', 'jane@doe.com'],
          // attachments: [
          //   'file://img/logo.png',
          //   'res://icon.png',
          //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
          //   'file://README.pdf'
          // ],
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Ted',
          isHtml: true
        };
        // Send a text message using default options
        EmailComposer.open(email);
        console.log("open email app");
      // } else {
      //   let alert = this.alertCtrl.create({
      //     title: 'Error!',
      //     subTitle: 'email is not available!',
      //     buttons: ['OK']
      //   });
      //   alert.present();
      // }
    });
  }

}
