import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';


@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  
 
  constructor() { 
      
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
  LogInWithGoogle() {
    this['auth'].googleSignIn();
  }
  

}
