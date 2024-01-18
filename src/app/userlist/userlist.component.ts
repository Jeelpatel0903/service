import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private user:UserServices) { }

  ngOnInit(): void {
  }

  userList=this.user.getalluser();

}
