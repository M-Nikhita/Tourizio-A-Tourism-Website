import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ALL_COUNTRIES } from '../../data/destinations-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class DestinationsComponent {
  // This component now has a single purpose: to display a list of all countries.
  allCountries = ALL_COUNTRIES;
  filteredCountries = [...this.allCountries];
searchQuery: string = '';
currentSortOrder: 'asc' | 'desc' | null = null;

onSearch(): void {
  if (this.searchQuery.trim() === '') {
    this.filteredCountries = [...this.allCountries];
  } else {
    this.filteredCountries = this.allCountries.filter(country =>
      country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

sortByNameAsc(): void {
  this.filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
  this.currentSortOrder = 'asc';
}

sortByNameDesc(): void {
  this.filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
  this.currentSortOrder = 'desc';
}
}
