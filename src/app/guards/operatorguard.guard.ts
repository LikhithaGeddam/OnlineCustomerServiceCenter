import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorguardGuard implements CanActivate {
  public constructor(private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let data=sessionStorage.getItem("operatorInfo")
      if(data!=null)
      {
        return true;
      }
      else
      {
        
         this.router.navigate(['../employeelogin']).then(()=>{
          window.location.reload();
          
        })
      };
      return false;
    }
}
