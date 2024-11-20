import { Component, OnInit } from '@angular/core';
import { User } from './user-model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.page.html',
  styleUrls: ['./user-search.page.scss'],
})
export class UserSearchPage implements OnInit {

  arrUsers: User[] = new Array (
    { 
      id: 1,
      username: 'user123',
      email: 'user123@example.com',
      password: 'Passw0rd!'
    },
    {
      id: 2,
      username: 'jane_doe',
      email: 'jane.doe@example.com',
      password: 'Qwerty123!',
    },
    {
      id: 3,
      username: 'john_smith',
      email: 'john.smith@example.com',
      password: 'MySecureP@ss1'
    },
    {
      id: 4,
      username: 'test_user',
      email: 'test.user@example.com',
      password: 'Testing123!'
    },
    {
      id: 5,
      username: 'alice_wonder',
      email: 'alice.wonder@example.com',
      password: 'Wonderland2024!'
    }
  );
  searchInput: string = '';

  public arrUsersSearch: User[] = this.arrUsers;

  constructor() { }

  ngOnInit() {
  }

  checkName(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    this.searchInput = query;

    if(this.searchInput.length > 3) {
      this.arrUsersSearch = this.arrUsers.filter(user => user.username.toLowerCase().includes(this.searchInput));
    } else {
      this.arrUsersSearch = this.arrUsers;
    }
  }
}
