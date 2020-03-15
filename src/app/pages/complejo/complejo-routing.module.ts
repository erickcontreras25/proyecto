import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplejoPage } from './complejo.page';

const routes: Routes = [
  {
    path: '',
    component: ComplejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplejoPageRoutingModule {}
