import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editarticle',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './editarticle.component.html',
  styleUrl: './editarticle.component.css'
})
export class EditarticleComponent {
  msg=''
  aid=''
  article:any
  categories:any
   constructor(private as:ArticleService,private cs:CategoryService,private route :ActivatedRoute){
    this.cs.getCategories().subscribe(res=>{
      this.categories=res;
     })  
      this.route.params.subscribe(p=>{
     //   console.log(p)
     this.aid=p['id'];
     this.as.getArticle(this.aid).subscribe(res=>{
      this.article=res;
      this.articleForm.setValue({
        title:this.article.title,category:this.article.category,body:this.article.body
      })
    })   
  
    

      })
   }

   articleForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required]),
    
  }) 
   
  imageForm=new FormGroup({
    image:new FormControl('')

   
    
  })

  onFileSelect(event:any){
    let file= event.target.files[0]
    this.imageForm.patchValue({image:file})
    this.as.UpdateImage(this.aid,this.imageForm).subscribe(res=>{
      this.as.getArticle(this.aid).subscribe(res=>{
        this.article=res;
      })
    })
 }

  
  
    onSubmit(){
      let form=this.articleForm.value;
     //  console.log(this.articleForm.value)
       this.as.UpdateData(this.aid,form).subscribe(res=>{
        this.msg=res.response;
        console.log(res)
    
       })
    
     console.log(this.articleForm.value)
   }

}
