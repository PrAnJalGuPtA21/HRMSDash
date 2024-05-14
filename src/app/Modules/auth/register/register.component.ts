import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../Core/auth/api.service';
import { User } from '../../../Core/Interfaces/User.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private authService: ApiService) {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  signIn() {
    this.router.navigateByUrl('/auth/login');
  }

  onSubmit() {
    const data = this.registerForm.value
    if (this.registerForm.valid) {
      this.authService.addUser(data).subscribe((data: User) => {
        console.log(data);
        this.router.navigateByUrl("/auth/login");
      });
    }
  }
}
