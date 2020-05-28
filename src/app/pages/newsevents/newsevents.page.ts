import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-newsevents',
  templateUrl: './newsevents.page.html',
  styleUrls: ['./newsevents.page.scss'],
})
export class NewseventsPage implements OnInit {

  public newsJson: any = [];
  constructor(
    private config: ConfigService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getNewsData();
  }

  getNewsData() {
    this.loader.presentFn('Loading.....');
    this.config.getData(`api_newsEventList.php`).subscribe(result => {
      if (result.status === 'success') {
        this.newsJson = result.data;
        console.log(result.data);
        this.loader.dismiss();
      }

    }, error => {
      console.log(error);
      alert(JSON.stringify(error));
      this.loader.dismiss();
    });
  }

}
