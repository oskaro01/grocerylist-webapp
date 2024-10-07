import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText;
  @Input() currentName ='';
  @Input() currentQuantity = '';
  @Input() currentPrice = '';
  @Input() currentViews ='';
 

  name: string ='';
  quantity: string ='';
  price: string ='';
  views: string='';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.name = this.currentName;
    this.quantity = this.currentQuantity;
    this.price = this.currentPrice;
    this.views= this.currentViews;
  }

  onButtonClicked(): void {

    this.onSubmit.emit({
      id:null,
      name: this.name,
      quantity: this.quantity,
      price: Number(this.price),
      views: 0,
    })
    
  }

}
