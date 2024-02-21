import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  msg=''
  constructor(private as:AdminService,private router:Router){ }

  adminForm=new FormGroup({
    emailId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

   onSubmit(){
    let form=this.adminForm.value;
    this.as.adminLogin(form).subscribe(res=>{
      if(res.success)
      {
        window.alert(res.response);
        localStorage.setItem("adminId",res.adminId);
        this.router.navigate(['/admin/category']);

      }
      else{
        this.msg=res.response;
      }
    }) 
  }
}
