import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';


const routes: Routes = [
   {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'fichapersonal',
    loadChildren: () => import('./pages/fichapersonal/fichapersonal.module').then( m => m.FichapersonalPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'escanear-resultado',
    loadChildren: () => import('./pages/escanear-resultado/escanear-resultado.module').then( m => m.EscanearResultadoPageModule)
  },
  {
    path: 'historial-asignatura',
    loadChildren: () => import('./pages/historial-asignatura/historial-asignatura.module').then( m => m.HistorialAsignaturaPageModule)
  },
  {
    path: 'herramientas-calendario',
    loadChildren: () => import('./pages/herramientas-calendario/herramientas-calendario.module').then( m => m.HerramientasCalendarioPageModule)
  },
  {
    path: 'herramientas-reglamento',
    loadChildren: () => import('./pages/herramientas-reglamento/herramientas-reglamento.module').then( m => m.HerramientasReglamentoPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'login-estudiantes',
    loadChildren: () => import('./pages/login-estudiantes/login-estudiantes.module').then( m => m.LoginEstudiantesPageModule)
  },
  {
    path: 'login-docentes',
    loadChildren: () => import('./pages/login-docentes/login-docentes.module').then( m => m.LoginDocentesPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'restablecer-pass',
    loadChildren: () => import('./pages/restablecer-pass/restablecer-pass.module').then( m => m.RestablecerPassPageModule)
  },
  {
    path: 'restablecer-correo',
    loadChildren: () => import('./pages/restablecer-correo/restablecer-correo.module').then( m => m.RestablecerCorreoPageModule)
  },
  {
    path: 'inicio-fake',
    loadChildren: () => import('./pages/inicio-fake/inicio-fake.module').then( m => m.InicioFakePageModule)
  },
  {
    path: 'proximamente',
    loadChildren: () => import('./pages/proximamente/proximamente.module').then( m => m.ProximamentePageModule)
  },
  {
    path: 'a',
    loadChildren: () => import('./pages/a/a.module').then( m => m.APageModule)
  },
  {
    path: 'inicio-fake-d',
    loadChildren: () => import('./pages/inicio-fake-d/inicio-fake-d.module').then( m => m.InicioFakeDPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
  {
    path: 'escanear-qr-resultado',
    loadChildren: () => import('./pages/escanear-qr-resultado/escanear-qr-resultado.module').then( m => m.EscanearQrResultadoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'loginn',
    loadChildren: () => import('./pages/loginn/loginn.module').then( m => m.LoginnPageModule)
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule)
  },
  {
    path: 'inicio1',
    loadChildren: () => import('./pages/inicio1/inicio1.module').then( m => m.Inicio1PageModule)
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./pages/menu-estudiante/menu-estudiante.module').then( m => m.MenuEstudiantePageModule)
  },
  {
    path: 'menu-docente',
    loadChildren: () => import('./pages/menu-docente/menu-docente.module').then( m => m.MenuDocentePageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'qr-test',
    loadChildren: () => import('./pages/qr-test/qr-test.module').then( m => m.QrTestPageModule)
  },
  {
    path: 'camara-test',
    loadChildren: () => import('./pages/camara-test/camara-test.module').then( m => m.CamaraTestPageModule)
  },
  {
    path: 'galeria-test',
    loadChildren: () => import('./pages/galeria-test/galeria-test.module').then( m => m.GaleriaTestPageModule)
  },
  {
    path: 'qr2-test',
    loadChildren: () => import('./pages/qr2-test/qr2-test.module').then( m => m.Qr2TestPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
