import { Component,afterNextRender } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-articles',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user-articles.component.html',
  styleUrl: './user-articles.component.css'
})
export class UserArticlesComponent {
  articleData : any;
  dmsg=""
  id=''
  constructor(private as:ArticleService){
  afterNextRender(()=>{
    this.id=localStorage.getItem("userId") || "";
    this.get(this.id)
   })
   
  }

  get(id:string){
    this.as.getArticlesByAuthor(id).subscribe(res=>{
      this.articleData=res;
      console.log(this.articleData)
    })
      
   
  }
  onDelete(id:string){
    this.as.deleteArticle(id).subscribe((res)=>{
    this.dmsg=res.response;
      this.get(this.id);
    })

  }


}
