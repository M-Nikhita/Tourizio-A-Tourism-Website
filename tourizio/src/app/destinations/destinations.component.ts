import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ALL_COUNTRIES } from '../../data/destinations-data';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class DestinationsComponent {
  // This component now has a single purpose: to display a list of all countries.
  allCountries = ALL_COUNTRIES;
}
