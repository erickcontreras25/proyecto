import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirmeEquipoPageRoutingModule } from './unirme-equipo-routing.module';

import { UnirmeEquipoPage } from './unirme-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirmeEquipoPageRoutingModule
  ],
  declarations: [UnirmeEquipoPage]
})
export class UnirmeEquipoPageModule {}
