import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTorneoPageRoutingModule } from './crear-torneo-routing.module';

import { CrearTorneoPage } from './crear-torneo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTorneoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearTorneoPage]
})
export class CrearTorneoPageModule {}
