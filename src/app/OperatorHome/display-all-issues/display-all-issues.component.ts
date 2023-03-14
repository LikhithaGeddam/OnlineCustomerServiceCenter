import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/customerhome/issue';
import { OperatorissueService } from 'src/app/serve/operatorissue.service';
import { OperatorIssue } from './operatorIssue';

@Component({
  selector: 'app-display-all-issues',
  templateUrl: './display-all-issues.component.html',
  styleUrls: ['./display-all-issues.component.css']
})
export class DisplayAllIssuesComponent implements OnInit{
  issuee:Issue = new Issue();
  loadMsg: String = "";
  errorMsg: String = "";
  issues: OperatorIssue[] = [];
  sortField: string = "issueId";
  changeSortField(filed: string) {
    this.sortField = filed;
  }
  searchText: any;

  issueUpdate: OperatorIssue = {
    issueType: "",
    issuedescription: "",
    issueStatus: "",
    solution: ""
  };
  constructor(private issueService: OperatorissueService, private router:Router) { }
  ngOnInit(): void {
    let data: any = sessionStorage.getItem("issuee");
    if(data!=null){
      this.issuee = JSON.parse(data);
    }
    let dept =localStorage.getItem('dept')
    let id =localStorage.getItem('id')
    const deptname:any=+dept!

    this.issueService.getAllIssues(dept)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.issues = data;
          this.loadMsg = "Fetched all issues, Successfully!";
          this.errorMsg = "";
        },
        error: (error) => {
          console.log(error);
          this.errorMsg = "Could not fetch all issues, please try after some time.";
          this.loadMsg = "";
        }
      })
  }
  displayStyle = "none";

  openPopup(issue: OperatorIssue) {
    this.displayStyle = "block";
    this.issueUpdate = issue;
    
  }
  closePopup(issueUpdate: OperatorIssue) {
    this.displayStyle = "none";
    this.issueUpdate.issueStatus = 'Closed';
    this.issueService.updateIssue(issueUpdate)
      .subscribe({
        next: (data) => {
          console.log("Successfully Updated Issue");
        },
        error: () => {
          console.log("error");
        }
      });
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
