import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) { }

  registerform = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email])
})

signinbtn() {
  this.router.navigateByUrl('/auth/login');
}

onSubmit() {


  this.router.navigateByUrl("/auth/login")
}
}
