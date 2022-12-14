import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-fichapersonal',
  templateUrl: './fichapersonal.page.html',
  styleUrls: ['./fichapersonal.page.scss'],
})
export class FichapersonalPage implements OnInit {

  constructor(
    private menuController:MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'Inicia Sesión',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
