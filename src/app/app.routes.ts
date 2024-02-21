import { Routes } from '@angular/router';
import { LayoutComponent } from './site/layout/layout.component';
import { BlogComponent } from './site/blog/blog.component';
import { HomeComponent } from './site/home/home.component';
import { ArticleComponent } from './site/article/article.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { UserComponent } from './user/user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddArticleComponent } from './user/add-article/add-article.component';
import { UserArticlesComponent } from './user/user-articles/user-articles.component';
import { ResetpwdComponent } from './user/resetpwd/resetpwd.component';
import { ForgotpwdComponent } from './user/forgotpwd/forgotpwd.component';
import { AccountComponent } from './user/account/account.component';
import { LoginComponent } from './admin/login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { AriclesComponent } from './admin/ariticle/aricles.component';
import { EditarticleComponent } from './user/editarticle/editarticle.component';
import { adminguardGuard } from './adminguard.guard';
import { userguardGuard } from './userguard.guard';

export const routes: Routes = [
    {path:'',component:LayoutComponent,title:'Writers Blog',
        children:[
        {path:'',component:HomeComponent,title:'Home'},
        {path:'blog/:category',component:BlogComponent,title:'Blog'},
        {path:'article/:id',component:ArticleComponent,title:'Post'}
    ]},
    
    {path:'admin',component:AdminComponent,title:'Admin Panel',
    children:[
    {path:'category',component:CategoryComponent,title:'Manage Category',canActivate:[adminguardGuard]},
    {path:'articles',component:AriclesComponent,title:'Articles', canActivate:[adminguardGuard]},
    {path:'users',component:UsersComponent,title:'Users', canActivate:[adminguardGuard]}
]},

{path:'user',component:UserComponent,title:'User Panel',
children:[
{path:'profile',component:ProfileComponent,title:'Profile',canActivate:[userguardGuard]},
{path:'add',component:AddArticleComponent,title:'Add Articles' ,canActivate:[userguardGuard]},
{path:'view',component:UserArticlesComponent,title:'MY Articles' ,canActivate:[userguardGuard]},
 {path:'edit/:id',component:EditarticleComponent,title:'Edit Articles' ,canActivate:[userguardGuard]},
]},

{path:'reset',component:ResetpwdComponent,title:'Reset Pwd'},
{path:'forgot',component:ForgotpwdComponent,title:'Forgot Pwd'},
{path:'adminlogin',component:LoginComponent,title:'Admin Login'},
{path:'account',component:AccountComponent,title:'User SignIn/Signup'},
];

