import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComplejosPageRoutingModule } from './lista-complejos-routing.module';

import { ListaComplejosPage } from './lista-complejos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComplejosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaComplejosPage]
})
export class ListaComplejosPageModule {}
