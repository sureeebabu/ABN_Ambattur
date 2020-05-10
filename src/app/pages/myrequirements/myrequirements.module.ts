import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyrequirementsPageRoutingModule } from './myrequirements-routing.module';
import { MyrequirementsPage } from './myrequirements.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyrequirementsPageRoutingModule
  ],
  declarations: [MyrequirementsPage]
})
export class MyrequirementsPageModule {}
