import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../adminHome/operators/operator';
import { Login } from '../logins/customerlogin/login';

@Injectable({
  providedIn: 'root'
})
export class OperatorloginService {

  constructor(private httpClient: HttpClient) { }
  LoginOperator(operator:Login):Observable<any>{
    return this.httpClient.post('http://localhost:8090/operator/login',operator, {responseType:'text'as'json'});
  }
  updateOperator(updateOperator:Operator):Observable<any>
  {
   return this.httpClient.put('http://localhost:8090/operator',updateOperator,{responseType:"json"})
  }
}
