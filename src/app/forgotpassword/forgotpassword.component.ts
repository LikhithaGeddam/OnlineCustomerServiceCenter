import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ForgotpasswordService } from '../serve/forgotpassword.service';
import { Forgot } from './forgotpassword';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{
  
  msg?:string
  errorMsg?:string
  confirmPassword?:string
  forgot:Forgot = new Forgot();
  constructor(private forgotService:ForgotpasswordService, private router:Router){}
  ngOnInit(): void {
  
  }
  onSubmit(){
    this.forgotService.ForgotCustomer(this.forgot)
    .subscribe({
      next: (data) => {
        console.log("Password successfully changed");
        console.log(data);
        this.msg = "Password successfully changed";
        this.errorMsg="";
      },
      error: (error) => {
        console.log(error);
        this.errorMsg="Could not change password";
        this.msg="";
      }
    })
  }
}
