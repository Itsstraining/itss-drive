import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  fireauth: any;

  constructor() { }

  LogInWithGoogle() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res: { user: { uid: any; }; }) => {

      this['router'].navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, (err: { message: any; }) => {
      alert(err.message);
    })
  }
}
