import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemberslistPageRoutingModule } from './memberslist-routing.module';
import { MemberslistPage } from './memberslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberslistPageRoutingModule
  ],
  declarations: [MemberslistPage]
})
export class MemberslistPageModule {}
