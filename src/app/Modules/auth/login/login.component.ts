import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../Core/auth/api.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private authservice: ApiService) { }
  signupbtn() {
    this.router.navigate(['./auth/register']);
  }

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })


  onLogin() {
    const data = this.loginform.value;
    if (this.loginform.valid) {
      this.authservice.login(data).subscribe(res => {
        const user = res.find((data: any) => {
          return data.email === this.loginform.value.email && data.password === this.loginform.value.password
        });
        if (user) {
          alert('Login Successful');
          this.loginform.reset();
          this.router.navigate(['./dash/home'])
        } else {
          alert('user not found')
        }
      }, err => {
        alert("Something went wrong")
      })
      console.log(this.loginform.value)
      this.router.navigate(['./dash/home'])
    }
    else {
      alert('Credentials gone wrong')
    }
  }
}
