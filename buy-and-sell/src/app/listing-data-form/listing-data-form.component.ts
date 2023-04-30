import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText = '';
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input()
  currentPrice!: Number;
  name: string = '';
  description: string = '';
  price!: Number;

  @Output() OnSubmit = new EventEmitter<Listing>();
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }
  onButtonClicked(): void {
    this.OnSubmit.emit({
      id: null!,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
