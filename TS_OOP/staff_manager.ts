import {User} from './user'
import { checkEmailValid } from './checkEmailValid';
export class StaffManager extends User{
    store_id:number;
    constructor(first_name: string,last_name:string,gender:string,phone:string,email:string,address:string,store_id:number) {
        super(first_name,last_name,gender,phone,email,address)
        this.store_id=store_id;
      }

      DisplayDetails():void{
        if(this.gender=='male'){
          console.log(`${this.first_name} ${this.last_name} \nHis Phone is ${this.phone} 
            \nHis email is ${this.email}
            \nHis Address is ${this.address}`)
        }
        else{
          console.log(`${this.first_name} ${this.last_name} \nHere Phone is ${this.phone} 
            \nHere email is ${this.email}
            \nHere Address is ${this.address}`)
        }
    }
}
let manager1=new StaffManager('Hashem','Ahmad','male','01229902195','hashem@gmail.com','elmaragha',0)
manager1.DisplayDetails()