import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiFeriadosService } from '../../services/api-feriados.service';
@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {


  feriados = []

  constructor(private menuController: MenuController,
              private api: ApiFeriadosService) { }

  ngOnInit() {
    this.api.getTopHeadLines().subscribe(resp => {
      console.log(resp);
    })
  }
}  
