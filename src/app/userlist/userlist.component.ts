import { Component, Inject, OnInit, inject } from '@angular/core';
import { UserServices } from '../services/user.services';
import { User } from '../Model/User';
 
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(
    // @Inject('User_Services')
   private user:UserServices) { }

  ngOnInit(): void {
  }

  userList=this.user.getalluser();

  ShowUserDetails(data:User){
    this.user.OnShowUserDetails(data);
  }

  EditUserDetails(data:User,i:number)
  {
    console.log("clikbtn");
    console.log(data);
    this.user.onEditUserDetails(data,i)
  }

  DeleteUser(data:User,i:number){
    this.user.deleteuser(data,i)
  }

  openmodel(){

  }

}
