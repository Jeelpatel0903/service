import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';
import { User } from '../Model/User';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private user: UserServices) { }

  @Input() val!: boolean;

  ngOnInit(): void {
    this.edituser();
    console.log("on init create", this.val);
  }

  ngOnChanges() {
    this.val = !this.val;
    console.log(this.val);
  }

  name: string | null = null;
  gender: string | null = null;
  subType: string | null = null;
  status: string | null = null;

  CreateNewUser() {
    if (this.name === null || this.gender === null || this.subType === null || this.status === null) {
      alert("Fill All Field");
      return;
    }
    this.user.createuser(new User({
      name: this.name,
      gender: this.gender,
      subtype: this.subType,
      status: this.status
    }));
    this.name = this.gender = this.subType = this.status = null;
  }

  edituser() {
    this.user.OnUserEditclick.subscribe(res => {
      this.name = res.name;
      this.gender = res.gender;
      this.subType = res.subtype;
      this.status = res.status;
    });
  }

  EditUserDetails() {
    console.log("before click Edit", this.val);
    this.user.EditUser(this.name!, this.gender!, this.subType!, this.status!);
    this.name = this.gender = this.subType = this.status = null;
    this.val = !this.val; // Toggle the value after performing the edit
    console.log("after click Edit", this.val);
  }
  
}
