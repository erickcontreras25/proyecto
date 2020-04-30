import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'reservar',
    loadChildren: () => import('./pages/reservar/reservar.module').then( m => m.ReservarPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'equipo',
    loadChildren: () => import('./pages/equipo/equipo.module').then( m => m.EquipoPageModule),
    canLoad: [ UsuarioGuard ]
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
    loadChildren: () => import('./pages/complejo/complejo.module').then( m => m.ComplejoPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'cancha',
    loadChildren: () => import('./pages/cancha/cancha.module').then( m => m.CanchaPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'unirme-equipo',
    loadChildren: () => import('./pages/unirme-equipo/unirme-equipo.module').then( m => m.UnirmeEquipoPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'lista-complejos',
    loadChildren: () => import('./pages/lista-complejos/lista-complejos.module').then( m => m.ListaComplejosPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'torneo',
    loadChildren: () => import('./pages/torneo/torneo.module').then( m => m.TorneoPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'crear-torneo',
    loadChildren: () => import('./pages/crear-torneo/crear-torneo.module').then( m => m.CrearTorneoPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'torneo-user',
    loadChildren: () => import('./pages/torneo-user/torneo-user.module').then( m => m.TorneoUserPageModule),
    canLoad: [ UsuarioGuard ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
