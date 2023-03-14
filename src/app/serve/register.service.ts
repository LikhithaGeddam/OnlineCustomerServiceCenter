import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../register/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  postCustomer(addCustomer:Register):Observable<any>{
    return this.httpClient.post('http://localhost:8090/customer',addCustomer)
  }
  updateCustomer(updateCustomer:Register):Observable<any>
  {
   return this.httpClient.put('http://localhost:8090/customer',updateCustomer)
  }
}
