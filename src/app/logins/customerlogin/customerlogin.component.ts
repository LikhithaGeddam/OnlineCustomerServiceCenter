import { JsonPipe } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/register/register';
import { CustomerloginService } from 'src/app/serve/customerlogin.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent{

  loginMsg:String ="";
  loginError:String="";
  public constructor(private customerLogin:CustomerloginService, private router:Router) { }
  loginCredentials:Register = new Register()
  onLogin()
  {
    this.customerLogin.LoginCustomer(this.loginCredentials).subscribe
    (
      {
        next:(data)=>{this.loginMsg="Login Successful" ;this.loginError="";    
        console.log(data);
        window.sessionStorage.setItem("customerInfo",JSON.stringify(data))
        let str = JSON.parse(data);
        localStorage.setItem('id',str['customerId'])
        window.sessionStorage.setItem("customerJwt",JSON.stringify(data.jwt))
        this.router.navigateByUrl('customerhome');
      },
        error:(error)=>{this.loginError=error.error ;this.loginMsg=""} 
      }
    )
  }
}
