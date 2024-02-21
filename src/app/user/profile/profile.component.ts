import { Component, afterNextRender } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
     umsg=''
     pmsg=''
     id=""

     constructor(private us:UserService){
      // afterNextRender(new method in angular) -> it is a function phele je browser pe phele render hoga than fir local storage ko search karega
      afterNextRender(()=>{
        this.id=localStorage.getItem("userId") || "";
        this.us.getUser(this.id).subscribe(res=>{ 
           this.userForm.setValue({
            firstName :res.firstName,
            lastName : res.lastName,
            city : res.city,
            phoneNo : res.phoneNo,
            state : res.state,
            gender : res.gender,
            dob : res.dob.slice(0,10)
           })
        })
       
      })
       
       }

     userForm=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      phoneNo:new FormControl('',[Validators.required])

      })
  
      passForm=new FormGroup({
        password:new FormControl('',[Validators.required]),
        rpassword:new FormControl('',[Validators.required])
       
        })
  
        onSubmit(){
          let form=this.userForm.value;
          this.us.UpdateProfile(this.id,form).subscribe(res=>{
            if(res.acknowledged)
            this.umsg="Profile Updated"
          else
             this.umsg=" Error in code"
          }) 
       }
     
       onChange(){
         let form=this.passForm.value;
         if(form.password==form.rpassword){
  
         this.us.changePassword(this.id,form).subscribe(res=>{
          if(res.acknowledged)
          this.pmsg="Password Changed"
        else
           this.pmsg=" Error in code"
        })
      }
         else{
          this.pmsg="password not matched"
         }
       }

}
