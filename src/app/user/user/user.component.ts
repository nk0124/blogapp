import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    constructor(private router:Router ){

    }
    logOut(){
      localStorage.removeItem('userId');
      this.router.navigate(['/']);
    }
}
