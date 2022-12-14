import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login-docentes',
  templateUrl: './login-docentes.page.html',
  styleUrls: ['./login-docentes.page.scss'],
})
export class LoginDocentesPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private menuController:MenuController,
              private alertController: AlertController, 
              private navController: NavController, 
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) {
                this.formularioLogin = fb.group({ 
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                 })
               }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{ 

      for(let obj of datos){
        if(obj.correoUsuario===f.correo && obj.passUsuario===f.password && obj.tipoUsuario==="Docente"){
          this.alertDocente(obj.nomUsuario);
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('inicio-fake-d');
          
        }
      }
      if(a==0){
        this.alertMsg();
      }
    })
  }


  mostrarMenu(){
    this.menuController.open('first');
  }


  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos Vuelva Intentarlo',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
  async alertDocente(nomUsuario:string){
    const alert = await this.alertController.create({
      message: 'Bienvenido Docente '+nomUsuario,
      buttons: ['OK']
    })
    await alert.present();
    return;
  }



}
