import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './service/user-guard.service';

const routes: Routes = [
  {path: 'users', component: ListUserComponent, canActivate: [UserGuardService], canLoad: [UserGuardService]},
  {path: 'user', component: CreateUserComponent},
  {path: 'user/:id', component: UpdateUserComponent, canActivate: [UserGuardService], canLoad: [UserGuardService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
