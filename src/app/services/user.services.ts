import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Model/User";

@Injectable({ providedIn: "root"})
export class UserServices {

    // constructor(private log:Loger){

    // }

    user: Array<User> = []

    constructor(){
        this.user.push(...[new User({
            name:'jeel',
            gender:'Male',
            subtype:'Monthly',
            status:'Active'
        }),
        new User({
            name:'Mantha',
            gender:'Male',
            subtype:'Monthly',
            status:'Active'
        }),new User({
            name:'Arjun',
            gender:'Male',
            subtype:'Monthly',
            status:'Active'
        }),
    
    
    ])
        
        }
    
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


    createuser(data:User) {
        // let user = new User(name, gender, subtype, status);
        // this.user.push(user)
        this.user.push(data)
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