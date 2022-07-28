import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CustomerGet } from '../Model/customer-get';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  configUrl=environment.apiURL
  retValue:Boolean=false;

  getCustomerDetails():Observable<CustomerGet[]>
  {
    return this.http.get<CustomerGet[]>(this.configUrl+'customers.json?key='+environment.ConfigKey+'&size='+environment.Size)
  }
  CreateCustomer(customer:CustomerGet):Observable<any>
  {    
   return this.http.post(this.configUrl+'customers.json?key='+environment.ConfigKey,customer);
  }
}
