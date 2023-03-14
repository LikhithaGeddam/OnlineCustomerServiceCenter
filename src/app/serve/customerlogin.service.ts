import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../logins/customerlogin/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerloginService {

  constructor(private httpClient:HttpClient) { }
  LoginCustomer(customer:Login): Observable<any>{
    return this.httpClient.post('http://localhost:8090/customer/login', customer, {responseType:'text'as'json'});
  }

}
