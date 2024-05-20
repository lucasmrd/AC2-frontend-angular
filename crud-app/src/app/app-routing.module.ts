import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/home/components/users/users.component';
import { WelcomeComponent } from './pages/home/components/welcome/welcome.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdduserComponent } from './pages/home/components/adduser/adduser.component';
import { EdituserComponent } from './pages/home/components/edituser/edituser.component';
import { HomecontentComponent } from './pages/home/components/homecontent/homecontent.component';

const routes: Routes = [
  {path: "", redirectTo: "/app", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: WelcomeComponent},
      {path: "home", component: HomecontentComponent},
      {path: "users", component: UsersComponent},
      {path: "adduser", component: AdduserComponent},
      {path: "edituser", component: EdituserComponent},
      {path: "todo-list", component: TodoListComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
