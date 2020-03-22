import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirmeEquipoPage } from './unirme-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: UnirmeEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirmeEquipoPageRoutingModule {}
