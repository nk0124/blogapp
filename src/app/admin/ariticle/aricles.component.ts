import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';  // when crate a loop in tag than import a commonmodule 

@Component({ 
  selector: 'app-aricles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aricles.component.html',
  styleUrl: './aricles.component.css'
})
export class AriclesComponent {
  
  articleData : any;
  constructor(private as:ArticleService){
   this.get()

  }  

  get(){
    this.as.getArticles().subscribe(res=>{
      this.articleData=res;
      console.log(this.articleData)
    })
  
  }

  statusUpdate(id:string,status:boolean){
      this.as.UpdateStatus(id,{hidden:status}).subscribe(res=>{
        console.log(res)
        this.get()
      })
  }
}
