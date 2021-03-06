import { Component } from '@angular/core';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/auth/authentication.service';
import { AlertFnService } from './services/alert/alert-fn.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public username = 'Suresh Kumar';
  public userEmail;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Members',
      url: '/members',
      icon: 'people-circle'
    },
    {
      title: 'News & Events',
      url: '/newsevents',
      icon: 'newspaper'
    },
    {
      title: 'Achievements',
      url: '/achievement',
      icon: 'trophy'
    },
    // {
    //   title: 'My Requirements',
    //   url: '/myrequirements',
    //   icon: 'reader'
    // },
    // {
    //   title: 'My Jobs',
    //   url: '/myjobs',
    //   icon: 'file-tray-full'
    // },
    // {
    //   title: 'My Profile',
    //   url: '/profile',
    //   icon: 'pencil'
    // },
    {
      title: 'About ABN Ambattur',
      url: '/aboutus',
      icon: 'information-circle'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'call'
    },
    // {
    //   title: 'Change Password',
    //   url: '/changepwd',
    //   icon: 'lock-closed'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private navController: NavController,
    private alertService: AlertFnService,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      // this.authenticationService.authState.subscribe(state => {
      //   console.log(state);
      //   // alert(state);
      //   if (state) {
      //     if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== undefined) {
      //       this.userEmail = localStorage.getItem('email');
      //     }
      //     this.navController.navigateRoot('/home');
      //   } else {
      //     this.navController.navigateRoot('/login');
      //   }
      // });

    });
  }

  logoutFn() {
    this.menuCtrl.close();
    this.alertService.logoutFn();
  }

}
