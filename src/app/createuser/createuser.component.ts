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
    this.edituser()
  }

  name:string  = ""
  gender:string  = ""
  subType:string  = ""
  status:string  = ""
  showcreate:boolean = false
  showedit:boolean = false


  CreateNewUser(){
    if(this.name === "" || this.gender === "" || this.subType === "" || this.status === ""){
      alert("Fill All Fild")
      return
    }
    this.user.createuser(this.name,this.gender,this.subType,this.status)
    this.name  = ""
  this.gender  = ""
  this.subType  = ""
  this.status  = ""
  }

  edituser(){

    console.log("hhh");
    this.user.OnUserEditclick.subscribe(res => {
      this.name = res.name
      this.gender = res.gender
      this.subType = res.subtype
      this.status = res.status
    })
  }


  EditUserDetails(){
    this.user.EditUser(this.name,this.gender,this.subType,this.status)
    this.name  = ""
  this.gender  = ""
  this.subType  = ""
  this.status  = ""
  }

}
