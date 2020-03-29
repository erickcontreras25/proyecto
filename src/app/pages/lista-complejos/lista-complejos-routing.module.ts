import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComplejosPage } from './lista-complejos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComplejosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComplejosPageRoutingModule {}
