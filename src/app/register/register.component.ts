import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../serve/register.service';
import { Register } from './register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  msg?:string
  errorMsg?:string
  confirmPassword?:string
  customer : Register = new Register()
  constructor(private registerService:RegisterService, private router:Router){}
  ngOnInit(): void {
    
  }
  
  onSubmit(){
    console.log(this.customer)
    this.registerService.postCustomer(this.customer)
    .subscribe({
      next:(data)=>{
        this.msg = "Successfully Registered."; 
        this.errorMsg="";
      },
      error:(error)=>{
        this.errorMsg = error.error ; 
        this.msg="";
      } 
    })
  }
  
}
