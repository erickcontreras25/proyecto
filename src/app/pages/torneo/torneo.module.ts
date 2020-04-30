import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorneoPageRoutingModule } from './torneo-routing.module';

import { TorneoPage } from './torneo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TorneoPage]
})
export class TorneoPageModule {}
