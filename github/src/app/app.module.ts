import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpClientModule } from "@angular/common/http";
import { AccountsModule } from './modules/accounts/accounts.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component'
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
