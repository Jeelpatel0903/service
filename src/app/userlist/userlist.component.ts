import { Component, Inject, OnInit, inject } from '@angular/core';
import { UserServices } from '../services/user.services';
import { User } from '../Model/User';
@Component({
  selector: 'app-userlist',
  templateUrl:'./userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  flag:boolean = false
  constructor(
    // @Inject('User_Services')
   private user:UserServices) { }

  ngOnInit(): void {
    console.log("on init",this.flag);
    
  }

  userList=this.user.getalluser();

  ShowUserDetails(data:User){
    this.user.OnShowUserDetails(data);
  }

  EditUserDetails(data: User, i: number) {
    this.flag = !this.flag; // Toggle the flag value
    console.log("edit click ", this.flag);
    console.log(data);
    this.user.onEditUserDetails(data, i);
  }
  

  DeleteUser(data:User,i:number){
    this.user.deleteuser(data,i)
  }

  openmodel(){

  }
  

}
