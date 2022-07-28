import { Component, OnInit } from '@angular/core';
import { CustomerGet } from '../Model/customer-get';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
custdetail:CustomerGet;
loading = false;
DOBmodel:any;
successFlag:boolean=false;
isVisible:boolean=false;
api:CommonService
  constructor(service:CommonService) { 
    this.custdetail= new CustomerGet();
    this.api=service;
  }

  ngOnInit(): void {
  }
CreateCustomer()
{
  this.loading=true;  
this.api.CreateCustomer(this.custdetail).subscribe(x=>{
  console.log("created")
  this.loading=false;
  this.successFlag=true;
  this.custdetail= new CustomerGet();
},
e=>{
  console.log(e);
this.successFlag=false;
this.loading=false;
},
()=>{
  this.isVisible=true;
});
  console.log(this.custdetail);  
}
}
