import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    //{
    //  icon: 'radio-button-off-outline',
    //  name: 'Inicio',
    // redirecTo: '/inicio'
   //},
    {
      icon: 'person-outline',
      name: 'Ficha de Alumno',
     redirecTo: '/fichapersonal'
   },
    {
      icon: 'qr-code-outline',
      name: 'Registrar Asistencia',
      redirecTo: '/registrar'
    },
   {
     icon: 'reader-outline',
     name: 'Registro',
    redirecTo: '/historial'
  },
    {
      icon: 'layers-outline',
      name: 'Utilidades',
      redirecTo: '/herramientas'
    },
    {
      icon: 'hand-right-outline',
      name: 'Centro de Ayuda',
      redirecTo: '/ayuda'
    },
    {
      icon: 'log-in-outline',
      name: 'Cerrar sesión',
      redirecTo: '/inicio'
    },
  ];



}
