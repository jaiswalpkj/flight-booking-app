import { Component, OnInit } from '@angular/core';
import Flight from 'src/app/Entity/Flight';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  flight:Flight=new Flight
  msg:string
  err:string

  onSubmit(){
    if((this.flight.airlineName!=null && this.flight.arrivalCity!=null && this.flight.bussinessSeat!=null &&this.flight.dateOfDeparture!=null && this.flight.departureCity!=null && this.flight.flightNumber!=null && this.flight.meal!=null && this.flight.nonBussinessSeat!=null && this.flight.price!=null)&&(this.flight.airlineName!='' && this.flight.arrivalCity!='' && this.flight.dateOfDeparture!='' && this.flight.departureCity!='' && this.flight.flightNumber!='' && this.flight.meal!='')){
      this.adminService.addFlight(this.flight).subscribe(response=>{
        console.log(response);
        this.msg="Flight Added Successfully"
       },error=>{
       console.log(error);
       this.err="Flight already added"
       })
    }
  }

  ngOnInit(): void {
  }

}
