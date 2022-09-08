import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Auth, authState, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUser$ = authState(this.auth);
 public user: any;
 isLoggined = false;

  constructor(private fireauth: AngularFireAuth, private router: Router, private auth: Auth) {
    if(auth){
      authState(this.auth).subscribe((temp: any) =>{
        this.user = temp;
      });
    }
   }
   
  //login method
  //login method
  login(email: string, password: string){
    // this.fireauth.signInWithEmailAndPassword(username,password). then(()=> {
    //     localStorage.setItem('token','true');
    //     this.router.navigate(['/main']);
    // }, err=> {
    //     alert(err.message);
    //     this.router.navigate(['/login']);
    // } )
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    })
  }
  
  //sign up
  signup(username:string,email:string, password:string){
   return from(
      createUserWithEmailAndPassword(this.auth, email, password)
      ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: username })));
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
