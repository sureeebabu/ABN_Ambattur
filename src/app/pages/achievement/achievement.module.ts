import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AchievementPageRoutingModule } from './achievement-routing.module';
import { AchievementPage } from './achievement.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AchievementPageRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
  ],
  declarations: [AchievementPage]
})
export class AchievementPageModule {}
