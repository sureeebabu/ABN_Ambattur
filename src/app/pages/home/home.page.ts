import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  // for storing the returned subscription

  constructor(
    private storage: Storage,
    private route: Router,
    private menuCtrl: MenuController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    // this.http.get('http://localhost:3000/api/v1/users/').subscribe(result => {
    //   console.log(result);
    // }, error => {
    //   console.log(error);
    // });
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      if (this.router.url === '/home' || this.router.url === '/') {
        navigator['app'].exitApp();
      }
      // this.exitFunction('Are you sure you want to Exit App ?');
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async exitFunction(msg: string) {
    const alert = await this.alertCtrl.create({
      header: msg,
      cssClass: 'buttonCss',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Okay',
          handler: () => {
            navigator['app'].exitApp();
            // console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();
  }

  logutfn() {
    this.storage.clear();
    this.route.navigateByUrl('/login');
  }
}
