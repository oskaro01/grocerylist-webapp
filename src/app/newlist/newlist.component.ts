import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MylistService } from '../mylist.service';



@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {



  constructor(
    private router: Router,
    private mylistService: MylistService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit({ name, quantity, price}): void {

    this.mylistService.newList(name, quantity, price)
    .subscribe(()=>{
      this.router.navigateByUrl('/Mylist');
    })

  }
}
