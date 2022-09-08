import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import {
  AbstractControl,
  ValidationErrors,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const Passwordconfirm = control.get('Passwordconfirm')?.value;

    if (password && Passwordconfirm && password !== Passwordconfirm) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  [x: string]: any;
  form = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      Passwordconfirm: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );
  // public form !: FormGroup;
  // Router:any;
  // Form: FormBuilder;
  constructor(
    private auth: AuthService,
    private toast: HotToastService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get Passwordconfirm() {
    return this.form.get('Passwordconfirm');
  }

  // signup(){
  //   if(this.username == ''){
  //     alert('Please enter username');
  //     return;
  //   }

  //   if(this.password == ''){
  //     alert('Please enter password');
  //   }

  //   this.auth.signup(this.username,this.password);
  //   this.username;
  //   this.password;

  //   // this.http.post<any>("http://localhost:4200/signup", this.form.value)
  //   // .subscribe(res=>{
  //   //   alert("Signup successful");
  //   //   this.form.reset();
  //   //   this.router.navigate(['/login']);
  //   // },err=>{
  //   //   alert("Something went wrong")
  //   // }
  //   // )
  // }
  submit() {
    if (!this.form.valid) return;

    const { username, email, password } = this.form.value;
    this.auth
      .signup(username, email, password)
      .pipe(
        this.toast.observe({
          loading: 'Signing up...',
          success: 'Signed up successfully',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
