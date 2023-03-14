import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/customerhome/issue';
import { OperatorissueService } from 'src/app/serve/operatorissue.service';
import { OperatorIssue } from '../display-all-issues/operatorIssue';

@Component({
  selector: 'app-pendingissues',
  templateUrl: './pendingissues.component.html',
  styleUrls: ['./pendingissues.component.css']
})
export class PendingissuesComponent implements OnInit{
  issuee:Issue = new Issue();
  loadMsg: String = "";
  errorMsg: String = "";
  issues: OperatorIssue[] = [];
  status: String = "Open";

  constructor(private issueService: OperatorissueService, private router:Router) { }

  ngOnInit(): void {
    let data: any = sessionStorage.getItem("issuee");
    if(data!=null){
      this.issuee = JSON.parse(data);
    }
    let dept =localStorage.getItem('dept')
    const deptname:any=+dept!
    this.issueService.typeOfIssues(dept, this.status)
    .subscribe({
      next: (data) => {
        console.log(data);
          this.issues = data;
          this.loadMsg = "Fetched all pending issues, Successfully!";
          this.errorMsg = "";
      },
      error: (error) => {
        console.log(error);
        this.errorMsg = "Could not fetch all pending issues, please try after some time.";
        this.loadMsg = "";
      }
    })
  }
  public logout(){
    if(confirm("Are you sure you want to LogOut?")==true){
      sessionStorage.clear();
      localStorage.clear()
      this.router.navigate(['/employeelogin']).then(()=>{
      window.location.reload();
      });
    }
  }
}
