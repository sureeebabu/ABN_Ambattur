import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AlertFnService {

  constructor(
    private alertController: AlertController,
    private storage: Storage,
    private router: Router
    ) { }

  async logoutFn() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure to Logout ?',
      cssClass: 'alertButtonCss',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.storage.clear().then(() => {
              console.log('all keys are cleared');
            });
            this.router.navigateByUrl('/login');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
