import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.page.html',
  styleUrls: ['./memberslist.page.scss'],
})
export class MemberslistPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private sms: SMS,
    private androidPermissions: AndroidPermissions,
  ) { }


  ngOnInit() {
  }

  smsFn() {
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {

      const options = {
        replaceLineBreaks: false,
        android: {
          intent: 'INTENT'
        }
      };
      this.sms.send('1234567890', 'Hello world!', options).then(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
    }).catch((err) => {
      alert(JSON.stringify(err));
    });
  }


  callFn() {
    this.callNumber.callNumber('1234567890', true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


}
