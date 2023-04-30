import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService
      .getListing()
      .subscribe((listing) => (this.listing = listing));
  }
}
