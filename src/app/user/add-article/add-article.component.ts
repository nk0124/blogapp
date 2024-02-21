import { Component,afterNextRender } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
    msg=''
    id=''
    categories:any
   constructor(private as:ArticleService,private cs:CategoryService){
     this.cs.getCategories().subscribe(res=>{
      this.categories=res;
     }) 
     afterNextRender(()=>{
      this.id=localStorage.getItem("userId") || "";
     })
   }

   articleForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required]),
    image:new FormControl('')
    
  })

   onSubmit(){
    let form=this.articleForm.value;
   //  console.log(this.articleForm.value)
     this.as.addArticle(form.title,form.category,form.body,form.image,this.id).subscribe(res=>{
      this.msg=res.response;
      console.log(res)
      this.articleForm.reset()
     })
   }
 

   onFileSelect(event:any){
      let file= event.target.files[0]
      this.articleForm.patchValue({image:file})

   }

}