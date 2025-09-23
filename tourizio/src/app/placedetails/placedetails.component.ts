import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ALL_COUNTRIES } from '../../data/destinations-data';
@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './placedetails.html', 
  styleUrls: ['./placedetails.css']
})
export class PlaceDetailsComponent implements OnInit {
  // These are the only properties this component needs
  placeDetails: any;
  countryDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // This logic correctly finds the place using its unique ID from the URL
    const placeId = this.route.snapshot.paramMap.get('placeId');

    if (placeId) {
      for (const country of ALL_COUNTRIES) {
        const foundPlace = country.places.find(p => p.id === +placeId);
        
        if (foundPlace) {
          this.placeDetails = foundPlace;
          this.countryDetails = country;
          break; // Stop searching once we find it
        }
      }
    }
  }

  // This public function is correctly accessed by the HTML to show star ratings
  public getStars(rating: number): number[] {
    return new Array(rating);
  }
}

