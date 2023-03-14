import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminloginService } from 'src/app/serve/adminlogin.service';
import { Login } from '../customerlogin/login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent{

  image = "../assets/Icon.png"
  loginMsg:String ="";
  loginError:String="";
  public constructor(private adminlogin:AdminloginService, private router:Router) { }
  admin:Login = new Login()
  onLogin()
  {
    this.adminlogin.LoginAdmin(this.admin).subscribe
    (
      {
        next:(data)=>{this.loginMsg="Login Successful" ;this.loginError="";
        window.sessionStorage.setItem("adminInfo",JSON.stringify(data.admin))
        let str=JSON.parse(data);
        localStorage.setItem('id',str['operatorId'])
        window.sessionStorage.setItem("adminJwt",JSON.stringify(data.jwt))
        this.router.navigateByUrl('operators');
      },
        error:(error)=>{this.loginError=error.error ;this.loginMsg=""} 
      }
    )
  }
}
