import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';

export const adminguardGuard: CanActivateFn = (route, state) => {
   let router = inject(Router)
    if(typeof localStorage !=='undefined'){
      let id = localStorage.getItem('adminId')?.toString();
      if(!!id){
         return true;
      }
      else{
         router.navigateByUrl('adminlogin')
         return false;
      }
    }
   return false;
};
 