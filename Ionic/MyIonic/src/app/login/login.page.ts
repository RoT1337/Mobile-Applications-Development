import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from './model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = new User("example@static.net", "password1");
  usernameInp!: string;
  passwordInp!: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.logUserCredentials();
  }

  logUserCredentials() {
    console.log('Static Username', this.user.getUsername());
    console.log('Static Password', this.user.getPassword());
  }

  async myClick() {
    this.usernameInp = (document.getElementById('uName') as HTMLInputElement).value;
    this.passwordInp = (document.getElementById('pWord') as HTMLInputElement).value;

    if (this.usernameInp === "" || (this.usernameInp === null && this.passwordInp === "")) {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Please input username',
        buttons: ['OK']
      }); 

      await alert.present();
    } else if (this.usernameInp != "" && this.passwordInp == "") {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Please input password',
        buttons: ['OK']
      }); 

      await alert.present();
    } else if (this.usernameInp != this.user.getUsername() && this.passwordInp != this.user.getPassword()) {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Username and password is incorrect',
        buttons: ['OK']
      }); 

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Login Successful',
        message: `Welcome ${this.user.getUsername()}`,
        buttons: ['OK']
      }); 

      await alert.present();
    }
  }
}
