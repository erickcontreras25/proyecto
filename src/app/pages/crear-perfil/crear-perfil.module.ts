import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPerfilPageRoutingModule } from './crear-perfil-routing.module';

import { CrearPerfilPage } from './crear-perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearPerfilPage]
})
export class CrearPerfilPageModule {}
