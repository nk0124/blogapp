import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
    umsg='' 
    lmsg=''
  constructor(private us:UserService,private router :Router){}
    
    userForm=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      emailId:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      phoneNo:new FormControl('',[Validators.required]),
      rpassword:new FormControl('',[Validators.required])

      })
  
      loginForm=new FormGroup({
        emailId:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required]),
       
        })

        onSubmit(){
           let form=this.userForm.value;
           if(form.password==form.rpassword){
            this.us.addUser(form).subscribe(res=>{
              if(res.success){
                this.umsg=res.response;
                this.userForm.reset();
              }
              else
              this.umsg="Error in code"
            })
           }
           else {
            this.umsg="Retype Password Not Matched"
           }
        }
      
        onLogin(){
          let form=this.loginForm.value;
          this.us.userLogin(form).subscribe(res=>{
            if(res.success)
            {
              window.alert(res.response);
              localStorage.setItem("userId",res.userid);
              this.router.navigate(['/user/profile']);

            }
            else{
              this.lmsg=res.response;
            }
          })
        }
}
