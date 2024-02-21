import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './resetpwd.component.html',
  styleUrl: './resetpwd.component.css'
})
export class ResetpwdComponent {
    msg=''
    constructor(private us:UserService,private router:Router){ }

    userForm = new FormGroup({
      code : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      rpassword : new FormControl('',[Validators.required]),
    })

    onSubmit(){
      let form=this.userForm.value;
      let code=localStorage.getItem('code')
      let emailId=localStorage.getItem('emailid') || ""
      console.log(emailId)
      if(code==form.code){
           if(form.password==form.rpassword){
               this.us.resetPassword(emailId,form).subscribe(res=>{
                 if(res.success){
                  window.alert(res.response);
                  localStorage.removeItem('code')
                  localStorage.removeItem('emailid')
                  this.router.navigate(['/account']);
                 console.log(res)
                 }
                 
                 else{
                    this.msg=res.response
                 }
               })
           }
           else {
            this.msg="password  does not matched"
           }
      }
      else{
        this.msg="verification  does not matched"
      }
   }
 
  

   }
