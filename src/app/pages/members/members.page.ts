import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';

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
  public fullData = [];
  public json = [
    {
      img: '../../../assets/handshake.png',
      title: 'Consulting'
    },
    {
      img: '../../../assets/diamond.png',
      title: 'Diamonds'
    },
    {
      img: '../../../assets/education.png',
      title: 'Education'
    },
    {
      img: '../../../assets/electrical.png',
      title: 'Electrical'
    },
    {
      img: '../../../assets/energy.png',
      title: 'Energy'
    },
    {
      img: '../../../assets/leaf.png',
      title: 'Environment'
    },
    {
      img: '../../../assets/financial.png',
      title: 'Financial'
    },
    {
      img: '../../../assets/government.png',
      title: 'Government'
    },
    {
      img: '../../../assets/healthcare.png',
      title: 'Health Care'
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.fullData = this.json;
  }

  onCancelSearch() {
    //  alert('ask');
    this.showSearchbar = false;
    // this.json = this.fullData;
    console.log(this.json);
  }


}
