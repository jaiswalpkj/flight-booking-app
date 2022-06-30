import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Flight from 'src/app/Entity/Flight';
import ReservationRequest from 'src/app/Entity/ReservationRequest';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  msg: string;
  flight: Flight;
  reservation: ReservationRequest = new ReservationRequest;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  onSubmit() {

    if((this.reservation.age!=null && this.reservation.email!=null&& this.reservation.passengerGender!=null&&this.reservation.passengerName!=null&&this.reservation.passengerPhone!=null)&&(this.reservation.email!=''&& this.reservation.passengerGender!=''&&this.reservation.passengerName!=''&&this.reservation.passengerPhone!='')){
      this.userService.bookFlight(this.reservation,this.flight.id).subscribe((response:any)=>{
        console.log(response);
        window.location.href = "/lastticket"
      },function (error) {
        console.log(error);
        alert("Something went wrong")
      })
    }

  }

  ngOnInit(): void {
    this.userService.getFlight(this.router.snapshot.params.id).subscribe(result => {
      console.log(result);
      this.flight = result as Flight;
    })

  }

}
