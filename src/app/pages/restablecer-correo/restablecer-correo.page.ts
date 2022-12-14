import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-correo',
  templateUrl: './restablecer-correo.page.html',
  styleUrls: ['./restablecer-correo.page.scss'],
})
export class RestablecerCorreoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }




  usuario={
    nombre:'',
    apellido:'',
    rut:'',
    direc:'',
    telefono:'',
    carrera:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }



}