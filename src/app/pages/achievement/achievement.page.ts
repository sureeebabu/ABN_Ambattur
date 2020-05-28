import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  public achieveJson: any = [];
  constructor(
    private config: ConfigService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getAchievementData();
  }

  getAchievementData() {
    this.loader.presentFn('Loading.....');
    this.config.getData(`api_achievementList.php`).subscribe(result => {
      if (result.status === 'success') {
        this.achieveJson = result.data;
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
