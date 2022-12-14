import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicio-fake',
  templateUrl: './inicio-fake.page.html',
  styleUrls: ['./inicio-fake.page.scss'],
})
export class InicioFakePage implements OnInit {

    constructor(private menuController:MenuController) { }
  
    ngOnInit() {
    }
  
    mostrarMenu(){
      this.menuController.open('first');
    }
  
  
  }
  