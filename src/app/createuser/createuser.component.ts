import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';
import { User } from '../Model/User';

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

  @Input() val!:boolean

  // name:string = ""
  // gender:string  = ""
  // subType:string  = ""
  // status:string  = ""
  name:string | null = null
  gender:string | null = null
  subType:string | null = null
  status:string | null = null

  showcreate:boolean = false
  showedit:boolean = false


  CreateNewUser(){
    if(this.name === "" || this.gender === "" || this.subType === "" || this.status === ""){
      alert("Fill All Fild")
      return
    }
    this.user.createuser(new User({
      name:this.name,
      gender:this.gender,
      subtype:this.subType,
      status:this.status
    }))
    this.name="",this.gender="",this.subType="",this.status="";

  }

  edituser(){
    this.user.OnUserEditclick.subscribe(res => {
    this.name = res.name,
    this.gender = res.gender,
    this.subType = res.subtype,
    this.status = res.status
    })
  }


  EditUserDetails(){
    this.val = !this.val;
    this.user.EditUser(this.name!,this.gender!,this.subType!,this.status!)
    this.name="",this.gender="",this.subType="",this.status="";
  }

}
