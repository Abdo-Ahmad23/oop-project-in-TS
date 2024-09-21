import {User} from './user'
import { checkEmailValid } from './checkEmailValid'
export class Customer extends User{
    static customers: Customer[] = []; // Static array to store customer instances
    static customer_id=0
    
    // start of constructor 
    constructor(first_name: string,last_name:string,gender:string,phone:string,email:string,address:string) {
      super(first_name,last_name,gender,phone,email,address)
      // Attempt to add this customer when created
      if(!Customer.exists(this) && checkEmailValid(this.email)){
        Customer.customer_id++;
      }
      else if (!checkEmailValid(this.email)){
        console.log(checkEmailValid(this.email))
        console.log(`Email of Customer ${this.first_name} ${this.last_name} is not valid !`)
      }
      const message = Customer.addCustomer(this);
      console.log(message);
      }


      // A method for print all Details of Customer
    DisplayDetails():void{
        if (this.gender=='male'){
          console.log(`${this.first_name} ${this.last_name} \nHis Phone is ${this.phone} 
            \nHis email is ${this.email}
            \nHis Address is ${this.address}`)
        }
        else {
          console.log(`${this.first_name} ${this.last_name} \nHere Phone is ${this.phone} 
            \nHere email is ${this.email}
            \nHere Address is ${this.address}`)
        }
        
    }
    
    // check if this customer is already eixisting
    static exists(customer: Customer): boolean {
      return this.customers.some(existingCustomer => existingCustomer.email === customer.email && existingCustomer.first_name=== customer.first_name && existingCustomer.last_name=== customer.last_name);
  }

  // Adding customer
  static addCustomer(customer: Customer): string {
    if (this.exists(customer)) {
        return `Customer ${customer.first_name} ${customer.last_name} already exists.`;
    } else {
        this.customers.push(customer);
        return `Customer "${customer.first_name} ${customer.last_name}" added successfully.`;
    }
}
      
    }

let c1=new Customer('Abdo','refaat','male','93934949','thisforwork23@gmail.com','sohaj')
let c2=new Customer('Abdo','refaat','male','93934949','thisforwork23@gmail.com','sohaj')

// c1.DisplayDetails()