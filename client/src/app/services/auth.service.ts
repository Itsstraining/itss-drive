import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { Observable,from } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUser$ = authState(this.auth);
  

  constructor(private fireauth: AngularFireAuth, private router: Router, private auth: Auth) { }

  //login method
  login(email: string, password: string): Observable<any>{
    return from(this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
        localStorage.setItem('token','true');
        this.router.navigate(['/main']);
    }, err=> {
        alert(err.message);
        this.router.navigate(['/login']);
    } ))
  }
  
  //sign up
  signup(username:string, password:string){
   return from (this.fireauth.createUserWithEmailAndPassword(username, password).then(()=> {
      alert('Sign up successful');
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);
      this.router.navigate(['/signup']);
    }))
    
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
