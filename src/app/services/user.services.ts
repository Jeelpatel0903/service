import { User } from "../Model/User";

export class UserServices{
    
    user:User[] = [
        new User("jeel","Male","monyhly","Active"),
        new User("arjun","Male","yearly","Active"),
        new User("manthan","Male","quaterly","Active"),
    ];

     getalluser(){
        return this.user;
     }

     createuser(name:string,gender:string,subtype:string,status:string){
        let user = new User(name,gender,subtype,status);
        this.user.push(user)
     }
}