import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
=======
import { AuthService } from 'src/app/services/auth.service';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
<<<<<<< HEAD

  constructor(auth: Auth) { }
=======
 
  username: string;
  password: string;
  constructor(private auth: AuthService) { }
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  signup(){
    if(this.username == ''){
      alert('Please enter username');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
    }

    this.auth.signup(this.username,this.password);
    this.username;
    this.password;
  }
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
}
