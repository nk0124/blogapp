import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 // url="http://localhost:3000/admin"; 
 url=environment.apiurl+"/admin";


  constructor(private http:HttpClient) { }

  adminLogin(data:any){
    return this.http.post<any>(this.url+"/login",data) 
  }

  
}
