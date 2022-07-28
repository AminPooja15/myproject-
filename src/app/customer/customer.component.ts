import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerGet } from '../Model/customer-get';
import { CommonService } from '../service/common.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
api:CommonService
successFlag:boolean
custDetails:CustomerGet[];
selectedCustDetails:CustomerGet;
closeResult: string = '';
  constructor(service:CommonService,private modalService: NgbModal) { 
    this.api=service;
    this.successFlag=false;
    this.custDetails=[];
    this.selectedCustDetails=new  CustomerGet();
  }

  ngOnInit(): void {
    this.getCustomerData();
  }
getCustomerData()
{

this.api.getCustomerDetails().subscribe(x=>{
  x.forEach(element => {
    var cust= new CustomerGet();
    cust.customer_number=element.customer_number;
    cust.date_birth=element.date_birth;
    cust.email=element.email;
    cust.first_name=element.first_name;
    cust.last_name=element.last_name;
    cust.mobile_phone_number=element.mobile_phone_number;
    cust.primary_address=element.primary_address;
    cust.ssn=element.ssn;
    cust.join_date=element.join_date;
    var todayDate=new Date();
    var dbo= new Date(element.date_birth);
    cust.age=todayDate.getFullYear()-dbo.getFullYear();
    this.custDetails.push(cust);
  });
  console.log(this.custDetails);
});


}
open(content:any, custdetails:any) {
  this.selectedCustDetails=custdetails;
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
