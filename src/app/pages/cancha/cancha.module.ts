import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanchaPageRoutingModule } from './cancha-routing.module';

import { CanchaPage } from './cancha.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanchaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CanchaPage]
})
export class CanchaPageModule {}
