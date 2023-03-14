import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OperatorloginService } from 'src/app/serve/operatorlogin.service';
import { Login } from '../customerlogin/login';

@Component({
  selector: 'app-operatorlogin',
  templateUrl: './operatorlogin.component.html',
  styleUrls: ['./operatorlogin.component.css']
})
export class OperatorloginComponent{

  image = "../assets/Icon.png"
  loginMsg:String ="";
  loginError:String="";
  public constructor(private operatorlogin:OperatorloginService, private router:Router) { }
  employee:Login = new Login()
  onLogin()
  {
    this.operatorlogin.LoginOperator(this.employee).subscribe
    (
      {
        next:(data)=>{this.loginMsg="Login Successful" ;this.loginError="";
        window.sessionStorage.setItem("operatorInfo",JSON.stringify(data.employee))
        let str=JSON.parse(data);
        localStorage.setItem('dept',str["departmentName"]);
        localStorage.setItem('id',str['operatorId'])
        window.sessionStorage.setItem("operatorJwt",JSON.stringify(data.jwt))
        this.router.navigateByUrl('allIssues');
      },
        error:(error)=>{this.loginError=error.error ;this.loginMsg=""} 
      }
    )
  }
}
