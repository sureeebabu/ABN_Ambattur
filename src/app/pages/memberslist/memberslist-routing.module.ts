import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberslistPage } from './memberslist.page';

const routes: Routes = [
  {
    path: '',
    component: MemberslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberslistPageRoutingModule {}
