import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: any = {};
  constructor(private http: HttpClient) { }

  getReportList(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
  }

  setSelectedUserData(user) {
    this.selectedUser = user;
  }

  getSelectedUserData() {
    return this.selectedUser;
  }
}
