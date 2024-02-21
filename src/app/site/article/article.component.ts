import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
   aid=''
  article : any;
  constructor(private as:ArticleService,private route:ActivatedRoute){
 
  this.route.params.subscribe(p=>{
    this.aid=p['id'];
    this.as.getArticle(this.aid).subscribe(res=>{
      this.article=res;
      console.log(this.article)
    })   
  
     })
 

  }

}
