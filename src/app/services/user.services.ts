import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Model/User";
import { Loger } from "./logservice";

// @Injectable()
export class UserServices {

    // constructor(private log:Loger){

    // }

    user: User[] = [
        new User("jeel", "Male", "Monthly", "Active"),
        new User("arjun", "Male", "Yearly", "Active"),
        new User("manthan", "Male", "Quaterly", "Active"),
    ];
    index: number = 0
    getalluser() {
        return this.user;
    }

    OnUserDetailsclick: EventEmitter<User> = new EventEmitter<User>();
    OnUserEditclick: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User) {
        // console.log(user);
        this.OnUserDetailsclick.emit(user);
    }

    onEditUserDetails(user: User, i: number) {
        console.log("service");
        this.OnUserEditclick.emit(user)
        this.index = i
    }


    createuser(name: string, gender: string, subtype: string, status: string) {
        let user = new User(name, gender, subtype, status);
        this.user.push(user)
        // this.log.showalert()
    }

    deleteuser(data:User,i:number){
        console.log(i);
        this.user.splice(i,1)
    }

    EditUser(name: string, gender: string, subtype: string, status: string) {
        this.user[this.index].name = name
        this.user[this.index].gender = gender
        this.user[this.index].subtype = subtype
        this.user[this.index].status = status


    }


}