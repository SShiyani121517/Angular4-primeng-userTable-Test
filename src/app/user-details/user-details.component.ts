import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.selectedUser = this.userService.getSelectedUserData();
    if (!Object.keys(this.selectedUser).length) {
      this.router.navigate(['user'])
    }

  }

  getAddress(address) {
    return `${address.suite} ${address.street} ${address.city} ${address.zipcode} `
  }

}
