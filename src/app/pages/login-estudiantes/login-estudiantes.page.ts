import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-estudiantes',
  templateUrl: './login-estudiantes.page.html',
  styleUrls: ['./login-estudiantes.page.scss'],
})
export class LoginEstudiantesPage implements OnInit {

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
        if(obj.correoUsuario===f.correo && obj.passUsuario===f.password && obj.tipoUsuario==="Estudiante"){
          this.alertEstudiante(obj.nomUsuario);
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('inicio-fake');

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
  async alertEstudiante(nomUsuario:string){
    const alert = await this.alertController.create({
      message: 'Bienvenido Estudiante '+nomUsuario,
      buttons: ['OK']
    })
    await alert.present();
    return;
  }


}


