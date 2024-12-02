import { Component, OnInit } from '@angular/core';
import { User } from './model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.page.html',
  styleUrls: ['./test-api.page.scss'],
})
export class TestApiPage implements OnInit {

  model: User = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUsers().subscribe((data) => {
      console.log('Data', data);
      this.model.username = data[0].username;
      this.model.password = data[0].password;
      this.model.email = data[0].email;
    });
  }

  public async register() {
    console.log('UserModel: Username-', this.model.username, ' Password-', this.model.password);

    this.authService.addUsers(this.model).subscribe((res) => {
      console.log('Result: ', res);
    });
  }
}
