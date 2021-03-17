import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { HttpClientModule } from "@angular/common/http";
import { AccountRoutingModule } from './accounts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AccountRoutingModule,
  ]
})
export class AccountsModule { }
