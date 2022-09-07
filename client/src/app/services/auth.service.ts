import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;
  isLoggined = false;

  constructor(private fireauth: AngularFireAuth, private router: Router, public auth: Auth) { 
    if(auth){
      authState(this.auth).subscribe((temp: any) =>{
        this.user = temp;
      });
    }
  }
  
  //login method
  login(username: string, password: string){
    this.fireauth.signInWithEmailAndPassword(username,password). then(()=> {
        localStorage.setItem('token','true');
        this.router.navigate(['/main']);
    }, err=> {
        alert(err.message);
        this.router.navigate(['/login']);
    } )
  }
  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    })
  }
  
  //sign up
  signup(username:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(username, password).then(()=> {
      alert('Sign up successful');
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);
      this.router.navigate(['/signup']);
    })
  }

  SignInWithGoogle(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=> {
    this.router.navigate(['/main']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid));
    
    }, err =>{
      alert(err.message)
    })
  }

}
