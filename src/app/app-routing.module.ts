import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./pages/reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'equipo',
    loadChildren: () => import('./pages/equipo/equipo.module').then( m => m.EquipoPageModule)
  },
  {
    path: 'crear-perfil',
    loadChildren: () => import('./pages/crear-perfil/crear-perfil.module').then( m => m.CrearPerfilPageModule)
  },
  {
    path: 'crear-equipo',
    loadChildren: () => import('./pages/crear-equipo/crear-equipo.module').then( m => m.CrearEquipoPageModule)
  },
  {
    path: 'complejo',
    loadChildren: () => import('./pages/complejo/complejo.module').then( m => m.ComplejoPageModule)
  },
  {
    path: 'cancha',
    loadChildren: () => import('./pages/cancha/cancha.module').then( m => m.CanchaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
