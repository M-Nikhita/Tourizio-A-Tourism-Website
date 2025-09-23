import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './booking-confirmation.html',
  styleUrls: ['./booking-confirmation.css']
})
export class BookingConfirmationComponent implements OnInit {
  bookingDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // This code reads the booking data from the URL
    this.route.queryParams.subscribe(params => {
      this.bookingDetails = params;
    });
  }

  /**
   * Triggers the browser's print dialog, which allows the user
   * to either print the page or save it as a PDF.
   */
  public printConfirmation(): void {
    window.print();
  }
}

