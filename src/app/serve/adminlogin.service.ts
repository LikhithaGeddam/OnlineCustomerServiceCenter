import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../logins/customerlogin/login';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient:HttpClient) { }
  LoginAdmin(admin:Login):Observable<any>{
    return this.httpClient.post('http://localhost:8090/admin/login',admin, {responseType:'text'as'json'});
  }
}
