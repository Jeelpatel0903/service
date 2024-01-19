export class User{
    name:string | null = null
    gender:string | null = null
    subtype:string | null = null
    status:string | null = null

    constructor(initializer?: Partial<User>){
        if(!!initializer){
            Object.assign(this,initializer)
        }
    }


}


// export class AccountDataModel {
//     accountId: number | null = null;
//     accountName: string | null = null;
//     accountStatus: string | null = null;
//     constructor(initializer?: Partial<AccountDataModel>) {
//         if (!!initializer) { Object.assign(this, initializer); }
//     }
// }