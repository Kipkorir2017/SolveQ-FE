import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ChatComponent } from './components/chat/chat.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'post',component:PostComponent},
  {path:'chat',component:ChatComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
