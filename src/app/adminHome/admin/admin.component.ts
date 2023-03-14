import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/serve/admins.service';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  adminn:Admin = new Admin();
  admins:Admin[]=[];
  searchText:any;
  formHeader = "New Admin";
  formsHeader = "Update Admin";
  
  adminToUpdate = {
    email: "",
    name: "",
    password:""
  }
  
  showForm = false;
  viewForm = false;

  msg:String="";
  errorMsg:String="";

  constructor(private adminService:AdminsService, private router:Router){}

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("adminn");
    if(data!=null){
      this.adminn = JSON.parse(data);
    }
    
    this.adminService.getAdmins()
    .subscribe({
      next:(data) => {console.log(data); this.admins=data},
      error:(error)=> {console.log(error);}
      }
    ); 
  }

  closeForm(){
    this.showForm = false;
    this.viewForm = false;
    window.location.reload();
  }

  newDialog(){
    this.showForm = true;
    console.log("Added New Department");
  }

  openForm(admin:any){
    this.viewForm = true;
    this.adminToUpdate = admin;
    console.log("Updated New Department");
    this.adminService.updateAdmin(admin).subscribe({
      next:(data)=>{
        console.log("Opened"); 
        
      },
      error:()=>{
        console.log("error"); 
        
      }
    });
  }

  saveAdmin(){
    console.log("Submit Clicked");
    console.log(this.adminn);
    this.adminService.addAdmin(this.adminn)
    .subscribe({
      next:(data)=>{
        console.log("Successfully Admin Added");
        this.msg="Admin Added Successfully..";
        this.errorMsg="";
      },
      error:()=>{
        console.log("Could Not add Admin");
        this.msg="";
        this.errorMsg="Couldn't add Admin";
      }
    }) 
    this.showForm = false;
    window.location.reload();
  }
  
  updateAdmin(adminToUpdate:any){
    this.adminService.updateAdmin(adminToUpdate).subscribe({
      next:(data)=>{
        console.log("Successfully Admin Updated");
        this.msg="Admin Updated Successfully..";
        this.errorMsg=""; 
      },
      error:()=>{
        console.log("error");  
        this.msg="";
        this.errorMsg="Couldn't update Admin";
      }
    });
    this.showForm = false;
    window.location.reload();
  }
  public logout(){
    if(confirm("Are you sure you want to LogOut?")==true){
    sessionStorage.clear();
    localStorage.clear()
    this.router.navigate(['/adminlogin']).then(()=>{
      window.location.reload();
    });
  }
}

}
