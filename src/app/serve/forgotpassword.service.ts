import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forgot } from '../forgotpassword/forgotpassword';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private httpClient:HttpClient) { }
  ForgotCustomer(cforgot:Forgot):Observable<any>{
    return this.httpClient.put('http://localhost:8090/customer/changepassword/69',cforgot,{responseType:"json"});
  }
}
