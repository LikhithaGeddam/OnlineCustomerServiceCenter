import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperatorIssue } from '../OperatorHome/display-all-issues/operatorIssue';

@Injectable({
  providedIn: 'root'
})
export class OperatorissueService {

  constructor(private httpClient:HttpClient) { }
  getAllIssues(deptname:any):Observable<any>{
    return this.httpClient.get("http://localhost:8090/issues/"+deptname+"/", {responseType: "json"});
  }
  
  updateIssue(issue: OperatorIssue):Observable<any>{
    return this.httpClient.put("http://localhost:8090/issue/"+issue.issueId, issue, {responseType: "json"});
  }
  
  typeOfIssues(deptname:any, issueStatus:String):Observable<any>{
    return this.httpClient.get("http://localhost:8090/issue/" + deptname+"/"+issueStatus, {responseType: "json"});
  }
}
