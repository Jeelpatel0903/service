import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private user:UserServices) { }

  ngOnInit(): void {
  }

  name:string  = ""
  gender:string  = ""
  subType:string  = ""
  status:string  = ""


  CreateNewUser(){
    this.user.createuser(this.name,this.gender,this.subType,this.status)
  }

}
