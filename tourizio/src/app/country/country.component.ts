import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ALL_COUNTRIES } from '../../data/destinations-data';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class CountryComponent implements OnInit {
  allPlaces: any[] = [];
  filteredPlaces: any[] = [];
  countryName: string | null = '';
  states: string[] = [];
  activeStateFilter: string | null = null;
  currentSortOrder: 'asc' | 'desc' | 'popularity' | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      const selectedCountry = ALL_COUNTRIES.find(c => c.name === this.countryName);

      if (selectedCountry) {
        this.allPlaces = selectedCountry.places;
        this.filteredPlaces = [...this.allPlaces];
        this.states = selectedCountry.places.map(p => p.state)
                                            .filter((value, index, self) => self.indexOf(value) === index);
        this.activeStateFilter = null;
      }
    });
  }

  getPopularityText(popularity: number): string {
    if (popularity >= 5) {
      return 'Very Highly Visited';
    } else if (popularity >= 4) {
      return 'Highly Visited';
    } else if (popularity >= 3) {
      return 'Moderately Visited';
    } else if (popularity >= 2) {
      return 'Less Visited';
    } else {
      return 'Rarely Visited';
    }
  }

  getStarsArray(popularity: number): any[] {
    return Array(popularity).fill(0);
  }

 // A method to filter places by state
filterByState(state: string) {
  if (state === '') {
    // If the state is an empty string, show all places
    this.filteredPlaces = [...this.allPlaces];
  } else {
    // Otherwise, filter the places by the selected state
    this.filteredPlaces = this.allPlaces.filter(place => place.state === state);
  }
  this.activeStateFilter = state;
}
  sortByPopularity() {
    this.filteredPlaces.sort((a, b) => b.popularity - a.popularity);
    this.currentSortOrder = 'popularity';
  }

  sortByNameAsc() {
    this.filteredPlaces.sort((a, b) => a.name.localeCompare(b.name));
    this.currentSortOrder = 'asc';
  }

  sortByNameDesc() {
    this.filteredPlaces.sort((a, b) => b.name.localeCompare(a.name));
    this.currentSortOrder = 'desc';
  }
}