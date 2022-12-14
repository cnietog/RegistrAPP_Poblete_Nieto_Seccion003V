import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicio-fake-d',
  templateUrl: './inicio-fake-d.page.html',
  styleUrls: ['./inicio-fake-d.page.scss'],
})
export class InicioFakeDPage implements OnInit {

  constructor(private menuController:MenuController) { }
  
  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
