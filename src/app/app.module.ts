import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { IssueService } from './serve/issue.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatIconModule } from '@angular/material/icon';
import { OperatorsComponent } from './adminHome/operators/operators.component';
import { DepartmentComponent } from './adminHome/department/department.component';
import { DepartmentService } from './serve/department.service'; 
import { OperatorService } from './serve/operator.service';
import { HomeComponent } from './home/home.component';
import { CustomerloginComponent } from './logins/customerlogin/customerlogin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OperatorloginComponent } from './logins/operatorlogin/operatorlogin.component';
import { DisplayAllIssuesComponent } from './OperatorHome/display-all-issues/display-all-issues.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { PendingissuesComponent } from './OperatorHome/pendingissues/pendingissues.component';
import { ClosedissuesComponent } from './OperatorHome/closedissues/closedissues.component';
import { AdminloginComponent } from './logins/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './adminHome/admin/admin.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    OperatorsComponent,
    DepartmentComponent,
    HomeComponent,
    CustomerloginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    OperatorloginComponent,
    DisplayAllIssuesComponent,
    OrderbyPipe,
    PendingissuesComponent,
    ClosedissuesComponent,
    AdminloginComponent,
    AdminComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatIconModule
  ],
  providers: [IssueService, 
              DepartmentService, 
              OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
