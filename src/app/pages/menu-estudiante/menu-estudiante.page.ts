import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.page.html',
  styleUrls: ['./menu-estudiante.page.scss'],
})
export class MenuEstudiantePage implements OnInit {
  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
