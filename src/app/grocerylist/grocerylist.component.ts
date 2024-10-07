import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { MylistService } from '../mylist.service';


@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {

  

  Mylist:Listing[]=[];
  constructor(
    private MylistService: MylistService,
  ) { }

  //getListing mehtod is returing an observable 

  ngOnInit(): void {
   this.MylistService.getListing()  //calls to retuen some data
   .subscribe(Mylist=> this.Mylist= Mylist); //call back func that get called getListing Observable produces an event
  }
  

// deleting method
  onDeleteClicked(listingId:string): void{
    this.MylistService.deleteMylist(listingId)
    .subscribe(()=> {
      this.Mylist= this.Mylist.filter(
        Mylist=>Mylist.id !== listingId
      );
    })
  }

}
