import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../Core/auth/api.service';


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
    if (this.loginform.valid) {
      this.router.navigate(['/dash/home'])
    }
    else {
      alert('Credentials gone wrong')
    }
  }
}
