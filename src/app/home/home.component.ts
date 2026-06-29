import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ALL_COUNTRIES } from '../../data/destinations-data'; // Import new data

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Select the first 3 countries to feature on the homepage
  featuredCountries = ALL_COUNTRIES.slice(0, 3);
}