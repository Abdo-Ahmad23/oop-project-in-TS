export abstract class User{
    first_name:string;
    last_name:string;
    gender:string;
    phone:string;
    email:string;
    address:string;
    

    constructor(first_name: string,last_name:string,gender:string,phone:string,email:string,address:string) {
        this.first_name = first_name;
        this.last_name=last_name;
        this.phone=phone;
        this.email=email;
        this.address=address;
        this.gender=gender;
      }
    
    abstract DisplayDetails():void;
    
}

