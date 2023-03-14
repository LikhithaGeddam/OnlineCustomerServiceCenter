import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { DepartmentComponent } from './adminHome/department/department.component';
import { OperatorsComponent } from './adminHome/operators/operators.component';
import { HomeComponent } from './home/home.component';
import { CustomerloginComponent } from './logins/customerlogin/customerlogin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OperatorloginComponent } from './logins/operatorlogin/operatorlogin.component';
import { DisplayAllIssuesComponent } from './OperatorHome/display-all-issues/display-all-issues.component';
import { PendingissuesComponent } from './OperatorHome/pendingissues/pendingissues.component';
import { ClosedissuesComponent } from './OperatorHome/closedissues/closedissues.component';
import { AdminloginComponent } from './logins/adminlogin/adminlogin.component';
import { AdminComponent } from './adminHome/admin/admin.component';
import { SupportComponent } from './support/support.component';
import { CustomerguardGuard } from './guards/customerguard.guard';
import { AdminguardGuard } from './guards/adminguard.guard';
import { OperatorguardGuard } from './guards/operatorguard.guard';

const routes: Routes = [
  { path:'customerhome', canActivate:[CustomerguardGuard], component: CustomerhomeComponent },
  { path:'operators', canActivate:[AdminguardGuard], component:OperatorsComponent},
  { path:'departments', canActivate:[AdminguardGuard], component:DepartmentComponent},
  { path:'home', component:HomeComponent},
  { path:'register', component:RegisterComponent},
  { path:'forgot', component:ForgotpasswordComponent},
  { path:'allIssues', canActivate:[OperatorguardGuard], component:DisplayAllIssuesComponent},
  { path:'employeelogin', component:OperatorloginComponent},
  { path:'adminlogin', component:AdminloginComponent},
  { path:'pendingIssues', canActivate:[OperatorguardGuard], component:PendingissuesComponent},
  { path:'closedIssues', canActivate:[OperatorguardGuard], component:ClosedissuesComponent},
  { path:'login', component:CustomerloginComponent},
  { path:'admins', canActivate:[AdminguardGuard], component:AdminComponent},
  { path:'support', component:SupportComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' } //root URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }