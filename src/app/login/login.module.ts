import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule,Routes } from "@angular/router";
import { GrowlModule } from "primeng/primeng";

import { LoginRoutingModule } from "./login.routing";
import { LoginService } from "./login.service";

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GrowlModule,

    LoginRoutingModule
  ],
  declarations: [LoginFormComponent, RegisterFormComponent],
  exports:[],
  providers:[LoginService]
})
export class LoginModule { }
