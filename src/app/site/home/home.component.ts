import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articleData:any;
  categoryData:any;
  constructor(private as:ArticleService,private route:ActivatedRoute,private cs:CategoryService){
    this.as.getRecentArticles().subscribe(res=>{
      this.articleData=res;
    //  console.log(this.articleData)
    })  
  
    this.cs.getCategories().subscribe(res=>{
      this.categoryData=res;
     // console.log(this.categoryData)
    })  
  
    } 
   }
