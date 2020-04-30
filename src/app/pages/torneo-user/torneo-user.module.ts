import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorneoUserPageRoutingModule } from './torneo-user-routing.module';

import { TorneoUserPage } from './torneo-user.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneoUserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TorneoUserPage]
})
export class TorneoUserPageModule {}
