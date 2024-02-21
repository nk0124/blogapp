import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articleData : any;
  categoryid:any;
  constructor(private as:ArticleService,private route:ActivatedRoute){
  this.route.params.subscribe(p=>{
    this.categoryid=p['category']
    console.log(this.categoryid)
   

    this.as.getArticlesByCategory(this.categoryid).subscribe(res=>{
      this.articleData=res;
      console.log(this.articleData)
    })  
  

  })
 
  }
}
 