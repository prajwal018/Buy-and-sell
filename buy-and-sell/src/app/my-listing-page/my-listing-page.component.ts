import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css'],
})
export class MyListingPageComponent implements OnInit {
  listing: Listing[] = [];
  constructor(private listingService: ListingService) {}
  ngOnInit(): void {
    this.listingService
      .getListingForUser()
      .subscribe((listing) => (this.listing = listing));
  }
  onDeleteClicked(listingId: string): void {
    this.listingService.deleteListing(listingId).subscribe(() => {
      this.listing = this.listing.filter((listing) => listing.id !== listingId);
    });
  }
}
