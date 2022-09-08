import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { AuthService } from 'src/app/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
//  form = new FormGroup({
//     username: new FormControl('', [Validators.required]),
//     password: new FormControl('', Validators.required),
    // Email : new FormControl('', [Validators.required,Validators.email]),
//  })
  // email:string;
  // Router: any; 
  public form!: FormGroup
  
 
  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private toast: HotToastService) { 
      
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    })
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
  // login(){
  //   if(this.username == ''){
  //     alert('Please enter username');
  //     return;
  //   }

  //   if(this.password == ''){
  //     alert('Please enter password');
  //   }

  //   this.auth.login(this.username,this.password);
  //   this.username;
  //   this.password;
  //   // this.email;

  //   this.http.get<any>("http://localhost:4200/main")
  //   .subscribe((res: any[])=>{
  //     const user = res.find((a:any)=> {
  //       return a.email = this.form.value.email && a.password == this.form.value.password
  //     });
  //     if(user){
  //       alert("Login success");
  //       this.form.reset();
  //       this.router.navigate(['/main']);
  //     }else{
  //       alert('user not found');
  //     }(error: any) =>{
  //       alert("Something went wrong");
  //     }
  //   })
  // }

  get email(){
    return this.form.get('email');
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  
  SignInWithGoogle(): void{
    this.auth.SignInWithGoogle();
  }


 

  submit() {
    const { email, password} = this.form.value;

    if (!this.form.valid || !email || !password) {
      return this.toast.error('Please fill all the fields');
    }

    return this.auth
      .login(email, password).pipe(
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
