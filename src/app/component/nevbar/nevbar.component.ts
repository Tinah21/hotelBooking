import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent implements OnInit {
  @Input() name
  @Input() page

 @Input() firstname
 @Input() surname
 @Input() gender
 @Input() age
 @Input() bookingdate
 @Input() enddate
 @Input() roomtype


  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigator(){

    if(this.name === "checkin"){

      this.router.navigate(['display/checkin'],{queryParams:{firstname:this.firstname,surname:this.surname,gender:this.gender,age:this.age,
        bookingdate:this.bookingdate,enddate:this.enddate,roomtype:this.roomtype }})

    }
    else if(this.name === 'view'){

      this.router.navigate(['display/view'],{queryParams:{firstname:this.firstname,surname:this.surname,gender:this.gender,age:this.age,
        bookingdate:this.bookingdate,enddate:this.enddate,roomtype:this.roomtype }})
     
    }
  }
}
