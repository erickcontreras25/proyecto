import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorneoUserPage } from './torneo-user.page';

const routes: Routes = [
  {
    path: '',
    component: TorneoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneoUserPageRoutingModule {}
