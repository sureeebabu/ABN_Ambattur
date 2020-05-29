import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  backButtonSubscription;
  // for storing the returned subscription
  showSearchbar: boolean;
  term = '';
  // public fullData = [];
  public json: any = [];

  constructor(
    private config: ConfigService,
    private loader: LoaderService
  ) {
  }

  ngOnInit() {
    // this.fullData = this.json;
    this.getMembersData();
  }

  getMembersData() {
    this.loader.presentFn('Loading.....');
    this.config.getData(`api_categoryList.php`).subscribe(result => {
      if (result.status === 'success') {
        this.json = result.data;
        console.log(result.data);
        this.loader.dismiss();
      }

    }, error => {
      console.log(error);
      alert(JSON.stringify(error));
      this.loader.dismiss();
    });
  }


  onCancelSearch() {
    //  alert('ask');
    this.showSearchbar = false;
    // this.json = this.fullData;
    console.log(this.json);
  }


}
