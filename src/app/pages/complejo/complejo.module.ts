import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplejoPageRoutingModule } from './complejo-routing.module';

import { ComplejoPage } from './complejo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplejoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComplejoPage]
})
export class ComplejoPageModule {}
