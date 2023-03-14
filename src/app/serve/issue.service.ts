import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../customerhome/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient:HttpClient) { }
  getIssue(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/issues/"+id,{responseType:"json"});
  }

  addIssue(id1:number,issues:Issue):Observable<any>{
    console.log(issues);
    return this.httpClient.post("http://localhost:8090/issue/"+id1+"/",issues,{responseType:"json"});
  }

  updateIssue(issue:Issue):Observable<any>{
    return this.httpClient.put("http://localhost:8090/issue/"+issue.issueId, issue,{responseType:"json"});
  }

}
