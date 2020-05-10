import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrequirementsPage } from './myrequirements.page';

const routes: Routes = [
  {
    path: '',
    component: MyrequirementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrequirementsPageRoutingModule {}
