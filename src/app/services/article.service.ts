import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../interfaces/articles';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 // url="http://localhost:3000/article";
 url=environment.apiurl+"/article";

  constructor(private http:HttpClient) {}

  getArticles(){
    return this.http.get<any>(this.url)
  }

  getRecentArticles(){
    return this.http.get<any>(this.url+"/recent")
  }

  getArticlesByCategory(category:string){
    return this.http.get<any>(this.url+"/category/"+category)
  }

  getArticle(id:string){
    return this.http.get<any>(this.url+"/"+id)
  }
  
  getArticlesByAuthor(author:string){
    return this.http.get<any>(this.url+"/author/"+author)
  }

  addArticle(title:any,category:any,body:any,image:any,id:any){
    let data= new FormData();
    data.append('title',title)
    data.append('category',category)
    data.append('body',body)
    data.append('image',image ,image.name)
    data.append('author',id)
    return this.http.post<any>(this.url,data)
  }
 

  deleteArticle(id:string){
    return this.http.delete<any>(this.url+"/"+id)
  }

 
  UpdateStatus(id:string,data:any){  
    return this.http.patch<any>(this.url+"/status/"+id,data)
  }
  
  UpdateData(id:string,data:any){
    return this.http.patch<any>(this.url+"/"+id,data)
  }

  UpdateImage(id:string,data:any){
    return this.http.put<any>(this.url+"/image/"+id,data)
  }

}
