import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyjobsPageRoutingModule } from './myjobs-routing.module';
import { MyjobsPage } from './myjobs.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyjobsPageRoutingModule
  ],
  declarations: [MyjobsPage]
})
export class MyjobsPageModule {}
