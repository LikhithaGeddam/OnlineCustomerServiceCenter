import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../adminHome/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private httpClient:HttpClient) { }
  getAdmins():Observable<any>{
    return this.httpClient.get("http://localhost:8090/admins",{responseType:"json"});
  }
  addAdmin(admin:Admin):Observable<any>{
    return this.httpClient.post("http://localhost:8090/admin",admin,{responseType:"json"});
  }
  updateAdmin(admin:Admin):Observable<any>{
    return this.httpClient.put("http://localhost:8090/issue",admin,{responseType:"json"});
  }
}
