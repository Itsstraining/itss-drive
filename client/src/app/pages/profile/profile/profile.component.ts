import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'password';
    }
    return 'text';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit(): void {
  }

}
