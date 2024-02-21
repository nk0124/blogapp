import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userData:any
  constructor(private us:UserService){
  this.us.getUsers().subscribe(res=>{
    this.userData=res;
    console.log(this.userData)
  })

  }

}
