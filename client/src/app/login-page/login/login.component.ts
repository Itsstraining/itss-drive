import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
=======
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login', 
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }
  

  

  
=======
  username: string;
  password: string;
 
  constructor(private auth: AuthService) { 
      
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
  login(){
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


>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3

}
