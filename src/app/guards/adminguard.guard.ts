import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  public constructor(private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let data=sessionStorage.getItem("adminInfo")
      if(data!=null)
      {
        return true;
      }
      else
      {
        
         this.router.navigate(['../adminlogin']).then(()=>{
          window.location.reload();
          
        })
      };
      return false;
    }
}
