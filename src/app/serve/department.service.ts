import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../adminHome/department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  addDepartment(department:Department):Observable<any>{
    console.log(department);
    return this.httpClient.post("http://localhost:8090/department",department,{responseType:"json"});
  }

  getDepartments():Observable<any>{
    return this.httpClient.get("http://localhost:8090/departments",{responseType:"json"});
  }

  updateDepartment(department:Department):Observable<any>{
    return this.httpClient.put("http://localhost:8090/department/"+department.departmentId, department,{responseType:"json"});
  }

  deleteDepartmentById(department:Department):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/department/"+department.departmentId);
  }
}
