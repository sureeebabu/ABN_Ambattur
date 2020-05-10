import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MembersPageRoutingModule } from './members-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MembersPage } from './members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MembersPageRoutingModule
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
