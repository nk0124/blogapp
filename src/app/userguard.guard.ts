import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';

export const userguardGuard: CanActivateFn = (route, state) => {
   let router = inject(Router)
    if(typeof localStorage !=='undefined'){
      let id = localStorage.getItem('userId')?.toString();
      if(!!id){
         return true;
      }
      else{
         router.navigateByUrl('account')
         return false;
      }
    }
   return false;
};
 