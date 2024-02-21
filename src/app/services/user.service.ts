import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // url="http://localhost:3000/user";
 url=environment.apiurl+"/user";

  constructor(private http:HttpClient){}
  getUsers(){
    return this.http.get<any>(this.url)
  }

  getUser(id:string){
    return this.http.get<any>(this.url+"/"+id)
  }
 
  
  addUser(data:any){
    return this.http.post<any>(this.url,data)
  }
   
  UpdateProfile(id:string,data:any){
    return this.http.patch<any>(this.url+"/"+id,data)
  }


  userLogin(data:any){
    return this.http.post<any>(this.url+"/login",data)
  }

  changePassword(id:string,data:any){
    return this.http.patch<any>(this.url+"/pwd/"+id,data)
  }

  forgotPwd(data:any){
    return this.http.post<any>(this.url+"/forgot",data)
  }
 
  resetPassword(emailId:string,data:any){
    return this.http.patch<any>(this.url+"/pwdreset/"+emailId,data)
  } 

  
  

}
