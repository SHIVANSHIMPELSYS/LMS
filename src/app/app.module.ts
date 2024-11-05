import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutbodyComponent } from './aboutbody/aboutbody.component';
import { SliderheaderComponent } from './sliderheader/sliderheader.component';
import { LocationComponent } from './location/location.component';
import { FrompracticeComponent } from './frompractice/frompractice.component';
import { FormsModule } from '@angular/forms';
import { TformComponent } from './login-form/tform.component';
import { TformnointerfaceComponent } from './signup-form/tformnointerface.component';
import { ReactiveFormComponent } from './contactus-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularnavComponent } from './angularnav/angularnav.component';
import { AppRoutingModule } from './app.router';
import { ForumsComponent } from './forums/forums.component';
import { FAQsComponent } from './faqs/faqs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { Section7Component } from './section7/section7.component';
import { ContactusSection1Component } from './contactus-section1/contactus-section1.component';
import { ContactusMapComponent } from './contactus-map/contactus-map.component';
import { Section8Component } from './section8/section8.component';
import {SharedmaterialModule} from'./sharedmaterial/sharedmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AboutbodyComponent,
    SliderheaderComponent,
    LocationComponent,
    FrompracticeComponent,
    TformComponent,
    TformnointerfaceComponent,
    ReactiveFormComponent,
    AngularnavComponent,
    ForumsComponent,
    FAQsComponent,
    BlogsComponent,
    ContactusComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    DisplaydataComponent,
    Section7Component,
    ContactusSection1Component,
    ContactusMapComponent,
    Section8Component,
    SearchBoxComponent,
    AllCoursesComponent,
    LoginComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedmaterialModule,
    BrowserAnimationsModule


    // add everything that is being imported
  ],
  providers: [], // services   dependencies injection
  bootstrap: [AppComponent],
})
export class AppModule {}
