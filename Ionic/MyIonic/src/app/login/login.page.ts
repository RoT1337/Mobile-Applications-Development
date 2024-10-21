import { Component, OnInit } from '@angular/core';
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
  isAlertOpenSuccess = false;
  isAlertOpenFailed = false;
  alertButtons = ['OK'];

  ngOnInit() {
    this.logUserCredentials();
  }

  logUserCredentials() {
    console.log('Static Username', this.user.getUsername());
    console.log('Static Password', this.user.getPassword());
  }

  myClick(isOpen: boolean) {
    this.usernameInp = (document.getElementById('uName') as HTMLInputElement).value;
    this.passwordInp = (document.getElementById('pWord') as HTMLInputElement).value;

    if (this.usernameInp === this.user.getUsername() && this.passwordInp === this.user.getPassword()){
      this.isAlertOpenSuccess = isOpen;

    } else {
      this.isAlertOpenFailed = isOpen;

    }
  }
}
