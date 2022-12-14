import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }




  usuario={
    correo:'',
    telefono:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }



}
