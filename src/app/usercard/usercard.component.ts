import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
  constructor(private route:ActivatedRoute,private us:UserService){}
  cuser:any;
  ngOnInit(): void {
    let userId = +this.route.snapshot.paramMap.get('id')!;
    console.log('UserID:', userId); // Log the user ID to verify it's being retrieved
    this.cuser = this.us.users.find(u => u.id === userId);
    console.log('cuser:', this.cuser); // Log the user data to verify it's being assigned
  }

}
