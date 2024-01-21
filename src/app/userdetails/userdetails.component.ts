import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserServices } from '../services/user.services';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private user:UserServices) { }

  selectedUser : User | null = null


  ngOnInit() {
    this.user.OnUserDetailsclick.subscribe((res:User) => {
      this.selectedUser = res;
      console.log(this.selectedUser);
      
    }) 
  }


  closebtn(){
    this.selectedUser = null;
  }

  

} 

