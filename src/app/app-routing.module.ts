import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Thread } from './thread';
import { ThreadComponent } from './thread/thread.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'messages', component: ThreadComponent},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
