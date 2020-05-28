import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewseventsPageRoutingModule } from './newsevents-routing.module';
import { NewseventsPage } from './newsevents.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    NewseventsPageRoutingModule
  ],
  declarations: [NewseventsPage]
})
export class NewseventsPageModule {}
