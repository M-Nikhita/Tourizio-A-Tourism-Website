import { PlaceDetailsComponent } from './placedetails/placedetails.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BookTourComponent } from './booktour/booktour.component';
import { ContactComponent } from './contact/contact.component';
import { CountryComponent } from './country/country.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destinations/:countryName', component: CountryComponent },
  { path: 'book-tour', component: BookTourComponent },
  { path: 'contact', component: ContactComponent },
 { path: 'place-details/:placeId', component: PlaceDetailsComponent }, 
{ path: 'booking-confirmation', component: BookingConfirmationComponent },
{ path: 'about', component: AboutComponent },
{ path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];