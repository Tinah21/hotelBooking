import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  firstname
  surname
  gender
  age
  bookingdate
  enddate
  roomtype


  constructor(private router:Router) { }

  ngOnInit() {
      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.gender);
      console.log(this.age);
      console.log(this.bookingdate);
      console.log(this.enddate);
      console.log(this.roomtype);


  }
  
  book(){

    this.router.navigate(['display'],{queryParams:{firstname:this.firstname,surname:this.surname,gender:this.gender,age:this.age,
      bookingdate:this.bookingdate,enddate:this.enddate,roomtype:this.roomtype }})
  }
  

}
