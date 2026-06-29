import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ALL_COUNTRIES } from '../../data/destinations-data';

@Component({
  selector: 'app-book-tour',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './booktour.html',
  styleUrl: './booktour.css',
  encapsulation: ViewEncapsulation.None
})
export class BookTourComponent implements OnInit {
  bookingForm!: FormGroup;
  isFormSubmitted: boolean = false;
  
  countries = ALL_COUNTRIES;
  states: string[] = [];
  places: any[] = [];
  hotels: any[] = [];
  
  selectedPlace: any;
  selectedHotel: any;
  totalPrice: number = 0;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private cdRef: ChangeDetectorRef,private router: Router) { }

  ngOnInit(): void {
    // KEY CHANGE: Added startDate and endDate, removed old 'date' field
    this.bookingForm = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      placeName: ['', Validators.required],
      hotelName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      startDate: ['', Validators.required], // ADDED
      endDate: ['', Validators.required],   // ADDED
      people: [1, [Validators.required, Validators.min(1)]]
    });

    this.setupFormListeners();
    this.handleUrlParameters();
  }
  
  setupFormListeners(): void {
    this.bookingForm.get('country')?.valueChanges.subscribe(countryName => this.onCountryChange(countryName));
    this.bookingForm.get('state')?.valueChanges.subscribe(stateName => this.onStateChange(stateName));
    this.bookingForm.get('placeName')?.valueChanges.subscribe(placeName => this.onPlaceChange(placeName));
    this.bookingForm.get('hotelName')?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.bookingForm.get('people')?.valueChanges.subscribe(() => this.updateTotalPrice());
  }

  handleUrlParameters(): void {
     this.route.queryParams.subscribe(params => {
      const { country, state, place } = params;
      if (country) {
        this.bookingForm.patchValue({ country: country });
        setTimeout(() => {
          if (state) {
            this.bookingForm.patchValue({ state: state });
            setTimeout(() => {
              if (place) this.bookingForm.patchValue({ placeName: place });
            });
          }
        });
      }
    });
  }

  onCountryChange(countryName: string): void {
    const selectedCountry = this.countries.find(c => c.name === countryName);
    this.states = selectedCountry ? [...new Set(selectedCountry.places.map(p => p.state))] : [];
    this.bookingForm.patchValue({ state: '', placeName: '', hotelName: '' }, { emitEvent: false });
  }

  onStateChange(stateName: string): void {
    const countryName = this.bookingForm.get('country')?.value;
    const selectedCountry = this.countries.find(c => c.name === countryName);
    this.places = selectedCountry ? selectedCountry.places.filter(p => p.state === stateName) : [];
    this.bookingForm.patchValue({ placeName: '', hotelName: '' }, { emitEvent: false });
  }

  onPlaceChange(placeName: string): void {
    this.selectedPlace = this.places.find(p => p.name === placeName);
    this.hotels = this.selectedPlace ? this.selectedPlace.hotels : [];
    this.bookingForm.patchValue({ hotelName: '' }, { emitEvent: false });
  }

  updateTotalPrice(): void {
    const selectedHotelName = this.bookingForm.get('hotelName')?.value;
    const peopleCount = this.bookingForm.get('people')?.value || 1;
    this.selectedHotel = this.hotels.find(h => h.name === selectedHotelName);
    this.totalPrice = this.selectedHotel ? this.selectedHotel.price * peopleCount : 0;
  }

  onSubmit(): void {
    // Log #1: To confirm the function is being called
    console.log('Submit button clicked!');

    // Log #2: To check if the form is valid or not
    console.log('Is form valid?', this.bookingForm.valid);

    // Log #3: To see all the current values in the form
    console.log('Form Values:', this.bookingForm.value);
    
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      // Log #4: To see exactly which controls are invalid
      Object.keys(this.bookingForm.controls).forEach(key => {
        const controlErrors = this.bookingForm.get(key)?.errors;
        if (controlErrors != null) {
          console.error('Validation Error on control:', key, controlErrors);
        }
      });
      return; 
    }

    // Log #5: This will only appear if the form is valid and ready to navigate
    console.log('Form is valid. Navigating to confirmation page...');
    
    this.router.navigate(['/booking-confirmation'], { 
      queryParams: {
        ...this.bookingForm.value,
        totalPrice: this.totalPrice
      } 
    });
    
    this.bookingForm.reset({ people: 1 });
  }
}