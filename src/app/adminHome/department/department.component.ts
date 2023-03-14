import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/serve/department.service';
import { Department } from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  departmentt:Department = new Department();
  departments:Department[]=[];
  searchText:any;
  formHeader = "New Department";
  formsHeader = "Update Department";
  
  departmentToUpdate = {
    departmentId: "",
    departmentName: ""
  }
  
  showForm = false;
  viewForm = false;

  msg:String="";
  errorMsg:String="";

  constructor(private departmentService:DepartmentService, private router:Router){}

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("departmentt");
    if(data!=null){
      this.departmentt = JSON.parse(data);
    }
    
    this.departmentService.getDepartments()
    .subscribe({
      next:(data) => {console.log(data); this.departments=data},
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

  openForm(department:any){
    this.viewForm = true;
    this.departmentToUpdate = department;
    console.log("Updated New Department");
    this.departmentService.updateDepartment(department).subscribe({
      next:(data)=>{
        console.log("Opened"); 
        
      },
      error:()=>{
        console.log("error"); 
        
      }
    });
  }

  saveDepartment(){
    console.log("Submit Clicked");
    console.log(this.departmentt);
    this.departmentService.addDepartment(this.departmentt)
    .subscribe({
      next:(data)=>{
        console.log("Successfully Department Added");
        this.msg="Department Added Successfully..";
        this.errorMsg="";
      },
      error:()=>{
        console.log("Could Not add Department");
        this.msg="";
        this.errorMsg="Couldn't add Department";
      }
    }) 
    this.showForm = false;
    window.location.reload();
  }
  
  updateDepartment(departmentToUpdate:any){
    this.departmentService.updateDepartment(departmentToUpdate).subscribe({
      next:(data)=>{
        console.log("Successfully Department Updated");
        this.msg="Department Updated Successfully..";
        this.errorMsg=""; 
      },
      error:()=>{
        console.log("error");  
        this.msg="";
        this.errorMsg="Couldn't update Department";
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
  DeleteDepartment(departmentId:any){
    if (window.confirm("Do you want to delete, confirm?"))
      this.departmentService.deleteDepartmentById(departmentId)
    .subscribe({
      next:(data)=>{
        console.log("Successfully Department Deleted:"+departmentId);
        this.msg="Department Delete Successfully:"+departmentId;
        this.errorMsg="";
      },
      error:()=>{
        this.msg="";
        this.errorMsg="Couldn't delete Department:"+departmentId;
      }
    })
    window.location.reload();
  }
}
