import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import {AbstractControl,ValidationErrors, FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';


export function passwordsMatchValidator():ValidatorFn{
  return (_control: AbstractControl): ValidationErrors | null =>{
    const password = _control.get('password')?.value;
    const Passwordconfirm = _control.get('Passwordconfirm')?.value;

    if (password && Passwordconfirm && password !== Passwordconfirm){
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  [x: string]: any;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    Passwordconfirm: new FormControl('', Validators.required)
  }, 
  {Validators: passwordsMatchValidator() }
  );
  // public form !: FormGroup;
  // Router:any;
   email:string;
   username: string;
   password: string;
  // Form: FormBuilder;
  constructor(private auth: AuthService,    private toast: HotToastService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //     fullname:[''],
    //     username:[''],
    //     email:[''],
    //     password:['']
    // })
  }

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

    // this.http.post<any>("http://localhost:4200/signup", this.form.value)
    // .subscribe(res=>{
    //   alert("Signup successful");
    //   this.form.reset();
    //   this.router.navigate(['/login']);
    // },err=>{
    //   alert("Something went wrong")
    // }
    // )
  }
  submit() {
    const { name, email, password } = this.form.value;

    if (!this.form.valid || !name || !password || !email) {
      return;
    }

    this.auth
      .signup(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          {
            return this['usersService'].addUser({ uid, email, displayName: name });
          }
        ),
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
function passwordMatchValidator() {
  throw new Error('Function not implemented.');
}

