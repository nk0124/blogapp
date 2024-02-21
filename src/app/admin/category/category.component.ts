import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
// formgroup formcontrol  import  hum tb refer kerte hai jb multiple input hai form mai 
// agar port number same ho  to request accept ker li jati hai agar different port number ja host number 
// ho to request reject ker data hai service issliye iss problems ko solve kerne ke liye cors ko import kerna padtha hai 
// backend mai 
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  data:any;
  smsg:string=""
  dmsg:string=""
  constructor(private cs:CategoryService){
    this.get()

  }
    get(){
    this.cs.getCategories().subscribe((res)=>this.data=res)
  }
  categoryForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    icon:new FormControl('',[Validators.required])
  })

  onSubmit(){
    this.cs.addCategory(this.categoryForm.value).subscribe((res)=>{
   this.smsg=res.response;
   this.get()
   this.categoryForm.reset()
    })
    
  }
   
  onDelete(id:string){
    this.cs.deleteCategory(id).subscribe((res)=>{
    this.dmsg=res.response;
      this.get();
    })

  }
}
