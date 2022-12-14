import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-camara-test',
  templateUrl: './camara-test.page.html',
  styleUrls: ['./camara-test.page.scss'],
})
export class CamaraTestPage implements OnInit {

  constructor(public photoService: PhotoService) { 

    
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {
  }

}
