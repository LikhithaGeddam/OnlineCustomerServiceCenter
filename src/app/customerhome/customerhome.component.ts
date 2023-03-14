import { Component, OnInit } from '@angular/core';
import { IssueService } from '../serve/issue.service';
import { Issue } from './issue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit{
  issuee:Issue = new Issue();
  issues:Issue[]=[];
  searchText:any;
  id1=0;
  formHeader = "New Issue";
  formsHeader = "Update Issue";
  formssHeader = "Revoke Issue";
  sortField: string = "issueId";
  changeSortField(filed: string) {
    this.sortField = filed;
  }
 
  issueToUpdate = { 
    issueId: "",
    issueType: "",
    issuedescription:"",
    issueStatus:"",
    issueDate: "",
    solution:"",
    
  }
  
  
  showForm = false;
  viewForm = false;
  displayForm = false;

  msg:String="";
  errorMsg:String="";

  constructor(private issueService:IssueService, private router:Router){  }

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("issuee");
    if(data!=null){
      this.issuee = JSON.parse(data);
    }
    let id = localStorage.getItem('id')
    
    const cid:number=+id!
    this.id1=cid;

    this.issueService.getIssue(cid)
    .subscribe({
      next:(data) => {console.log(data); this.issues=data},
      error:(error)=> {console.log(error);}
      }
    );
  }

  closeForm(){
    this.showForm = false;
    this.viewForm = false;
    this.displayForm = false;
    window.location.reload();
  }

  newForm(){
    this.showForm = true;
    console.log("Added New Issue");
  }

  revokeForm(issue:any){
    this.displayForm = true;
    this.issueToUpdate = issue;
    this.issueService.updateIssue(issue).subscribe({
    next:(data)=>{
      console.log("Opened"); 
    },
    error:()=>{
      console.log("error");  
    }
  });
  }

  openForm(issue:any){
    this.viewForm = true;
    this.issueToUpdate = issue;
    console.log("Updated New Issue");
    this.issueService.updateIssue(issue).subscribe({
    next:(data)=>{
      console.log("Opened"); 
    },
    error:()=>{
      console.log("error");  
    }
  });
  }

  saveIssue(){
    console.log("Submit Clicked");
    console.log(this.issuee);
    
    this.issueService.addIssue(this.id1,this.issuee)
    .subscribe({
      next:(data)=>{
        console.log("Successfully Issue Added");
        this.msg = "Successfully Issue Added";
        this.errorMsg="";
      },
      error:()=>{
        console.log("error");
        this.errorMsg="Could Not add Issue";
        this.msg="";
      }
    }) 
    this.showForm = false;
    window.location.reload();
  }

  updateIssue(issueToUpdate:any){
    this.issueService.updateIssue(issueToUpdate).subscribe({
      next:(data)=>{
        console.log("Successfully Issue Updated"); 
        this.msg = "Successfully Issue Added";
        this.errorMsg="";
      },
      error:()=>{
        console.log("error"); 
        this.errorMsg="Could Not add Issue";
        this.msg=""; 
      }
    });
    this.showForm = false;
    window.location.reload();
  }

  revokeissue(issueToUpdate:any){
    if(confirm("Are you sure you want to Cancel Request?")==true){
      this.issueService.updateIssue(issueToUpdate).subscribe({
        next:(data)=>{
          console.log("Successfully Issue Revoked"); 
          this.msg = "Successfully Issue Revoked";
          this.errorMsg="";
        },
        error:()=>{
          console.log("error"); 
          this.errorMsg="Could Not revoke Issue";
          this.msg=""; 
        }
      });
    }
    this.displayForm = false;
    window.location.reload();
  }

  public logout(){
    if(confirm("Are you sure you want to LogOut?")==true){
    localStorage.clear()
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
      });
    }
  }
   
}
