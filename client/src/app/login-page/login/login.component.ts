import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import {HotToastService} from '@ngneat/hot-toast'




@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
 form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
 })
 
  username: string;
  password: string;
  Router: any;
  
 
  constructor(private auth: AuthService, private router: Router, private toast: HotToastService,  ) { 
      
    }

  ngOnInit(): void {
  
  }

  // public async login(){
  //   try {
  //     await signInWithPopup(this.auth, new GoogleAuthProvider())
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  

  // ngOnDestroy(): void{
  //   if (this.userDisposable) {
  //     this.userDisposable.unsubscribe();
  //   }
  // }
  login (){
    if(this.username == ''){
      alert('Please enter username');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
    }

    this.auth.login(this.username,this.password);
    this.username;
    this.password;
  }

  SignInWithGoogle(){
    this.auth.SignInWithGoogle();
  }

 

  submit() {
    const { username, password } = this.form.value;

    if (!this.form.valid || !username || !password) {
      return;
    }

    this.auth
      .login(username, password).pipe(
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: ({ message }) => `There was an error: ${message} `,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/main']);
      });
  }


}
