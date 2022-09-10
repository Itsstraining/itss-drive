import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items = [,
    { title: 'Logout' },
  ];
  constructor(public authSV: AuthService) { }
  
  ngOnInit(): void {
  }
  logout(){
    this.authSV.logout();
  }
}
