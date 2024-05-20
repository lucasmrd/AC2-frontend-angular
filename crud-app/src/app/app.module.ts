import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/home/components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/home/components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { AdduserComponent } from './pages/home/components/adduser/adduser.component';
import { EdituserComponent } from './pages/home/components/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    WelcomeComponent,
    TodoListComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
