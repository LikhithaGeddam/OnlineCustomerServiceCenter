import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperatorService } from 'src/app/serve/operator.service';
import { Operator } from './operator';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit{
  
  operatorr:Operator = new Operator();
  operators:Operator[]=[];
  searchText:any;
  formHeader = "New Operator";
  formsHeader = "Update Operator";
  sortField: string = "operatorId";
  changeSortField(filed: string) {
    this.sortField = filed;
  }
  
  operatorToUpdate = {
    operatorId: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    departmentName: "",
    password: ""
  }
  
  showForm = false;
  viewForm = false;

  msg:String="";
  errorMsg:String="";

  
  constructor(private operatorService:OperatorService, private router:Router){}

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("operatorr");
    if(data!=null){
      this.operatorr = JSON.parse(data);
    }
    let id =localStorage.getItem('id')
    const oid:number=+id!

    this.operatorService.getOperators()
    .subscribe({
      next:(data) => {console.log(data); this.operators=data},
      error:(error)=> {console.log(error);}
      }
    ); 
  }

  closeForm(){
    this.showForm = false;
    this.viewForm = false;
    window.location.reload();
  }
  newForm(){
    this.showForm = true;
    console.log("Added New Operator");
  }
  
  openForm(operator:any){
    this.viewForm = true;
    this.operatorToUpdate = operator;
    console.log("Updated New Operator");
    this.operatorService.updateOperator(operator).subscribe({
      next:(data)=>{
        console.log("Opened"); 
      },
      error:()=>{
        console.log("error");  
      }
    });
  }
  
  saveOperator(){
    console.log("Submit Clicked");
    console.log(this.operatorr);
    this.operatorService.addOperator(this.operatorr)
    .subscribe({
      next:(data)=>{
        console.log("Successfully Operator Added");
        this.msg="Operator Added Successfully..";
        this.errorMsg="";
      },
      error:()=>{
        console.log("Could Not add Operator");
        this.msg="";
        this.errorMsg="Couldn't add Operator";
      }
    }) 
    this.showForm = false;
    window.location.reload();
  }

  updateOperator(operatorToUpdate:any){
    this.operatorService.updateOperator(operatorToUpdate).subscribe({
      next:(data)=>{
        console.log("Successfully Operater Updated"); 
        this.msg="Operator Updated Successfully..";
        this.errorMsg="";
      },
      error:()=>{
        console.log("error");  
        this.msg="";
        this.errorMsg="Couldn't update Operator";
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
DeleteOperator(operatorId:any){
  if (window.confirm("Do you want to delete, confirm?"))
    this.operatorService.deleteOperatorById(operatorId)
  .subscribe({
    next:(data)=>{
      console.log("Successfully Operator Deleted:"+operatorId);
      this.msg="Operator Delete Successfully:"+operatorId;
      this.errorMsg="";
    },
    error:()=>{
      this.msg="";
      this.errorMsg="Couldn't delete Operator:"+operatorId;
    }
  })
  window.location.reload();
}

}
