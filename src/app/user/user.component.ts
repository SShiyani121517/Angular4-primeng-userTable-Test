import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: Array<any> = [];
cols = [
  { field: 'id', header: 'Id' },
  { field: 'name', header: 'Name' },
  { field: 'email', header: 'Email' },
  { field: 'address.city', header: 'City' },
  { field: 'phone', header: 'Phone' }
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getReportList().subscribe((resp) => {
      this.users = resp;
    })
  }

  onRowSelect(event) {
    this.userService.setSelectedUserData(event.data);
    this.router.navigate(['userDetails'])
  }

}
