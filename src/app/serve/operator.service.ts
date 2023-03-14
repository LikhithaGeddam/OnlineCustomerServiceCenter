import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../adminHome/operators/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private httpClient:HttpClient) { }
  getOperators():Observable<any>{
    return this.httpClient.get("http://localhost:8090/operators/",{responseType:"json"});
  }
  
  addOperator(operators:Operator):Observable<any>{
    console.log(operators);
    return this.httpClient.post("http://localhost:8090/operator",operators,{responseType:"json"});
  }

  updateOperator(operator:Operator):Observable<any>{
    return this.httpClient.put("http://localhost:8090/operator/"+operator.operatorId, operator,{responseType:"json"});
  }

  deleteOperatorById(operator:Operator):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/operator/"+operator.operatorId);
  }
}
