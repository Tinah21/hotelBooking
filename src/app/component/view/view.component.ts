import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  firstname
  surname
  gender
  age
  bookingdate
  enddate
  roomtype

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params=>{

      this.firstname = params['firstname'];
      this.surname = params['surname'];
      this.gender = params['gender'];
      this.age = params['age'];
      this.bookingdate = params['bookingdate'];
      this.enddate = params['enddate'];
      this.roomtype = params['roomtype'];

      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.gender);
      console.log(this.age);
      console.log(this.bookingdate);
      console.log(this.enddate);
      console.log(this.roomtype);


    })
    
  }


}
