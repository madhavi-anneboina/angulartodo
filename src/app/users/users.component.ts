import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UsercardComponent } from '../usercard/usercard.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = []; // Initialize as an empty array

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch user data from the UserService
    this.users = this.userService.users;
    console.log('Users:', this.users);
  }
}
