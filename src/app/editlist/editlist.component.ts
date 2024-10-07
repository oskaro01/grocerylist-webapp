import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MylistService } from '../mylist.service';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {

  Mylist: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mylistService: MylistService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mylistService.getListingById(id)
    .subscribe(Mylist => this.Mylist= Mylist);
  }

  onSubmit({ name, quantity, price}): void{

    this.mylistService.editList(this.Mylist.id, name, quantity, price)
    .subscribe(()=> {

      this.router.navigateByUrl('/Mylist');
    });

  }
}
