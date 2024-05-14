import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {  MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
