import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ForumsComponent } from './forums/forums.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'allcourses', component: AllCoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
