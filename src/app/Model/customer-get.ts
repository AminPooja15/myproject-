import { PrimayAddress } from "./primay-address"

export interface ICustomerGet {
    customer_number:number,
      first_name:string,
      last_name:string,
      date_birth:Date,
      ssn:string,
      email:string,
      primary_address:PrimayAddress,
      mobile_phone_number:string,
      join_date:string,
      age:number,
}

export class CustomerGet implements ICustomerGet {
    constructor()
    {
        this.primary_address= new PrimayAddress();
    }
    customer_number:number=0;
      first_name:string="";
      last_name:string="";
      date_birth:Date=new Date(Date.now());
      ssn:string="";
      email:string="";
      primary_address:PrimayAddress;
      mobile_phone_number:string="";
      join_date:string="";
      age:number=0;
}
