import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css'
})
export class ForgotpwdComponent {
      msg=''
      constructor(private us:UserService,private router:Router){}
        userForm=new FormGroup({
          emailId:new FormControl("",[Validators.required]),
        })

        onSubmit(){
          let form=this.userForm.value;
          let code= Math.floor( 111111 + Math . random ( ) * ( 999999 - 111111 )) ;
          let data = {emailId:form.emailId,code:code }
          this.us.forgotPwd(data).subscribe(res=>{
            if(res.success)
            {
              window.alert(res.response);
              localStorage.setItem("emailid",form.emailId || "");
              localStorage.setItem("code",code.toString() || "");
              this.router.navigate(['/reset']);
      
            }
            else{
              this.msg=res.response;
            }
         
            
          })

        }

      
}
