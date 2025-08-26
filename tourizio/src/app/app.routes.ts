import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BookTourComponent } from './book-tour/book-tour.component';
import { ContactComponent } from './contact/contact.component';
import { CountryComponent } from './country/country.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destinations/:countryName', component: CountryComponent },
  { path: 'book-tour', component: BookTourComponent },
  { path: 'contact', component: ContactComponent }
];