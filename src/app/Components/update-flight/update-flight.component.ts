import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Flight from 'src/app/Entity/Flight';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  flight:Flight=new Flight;
  msg:string
  err:string

  constructor(private adminService:AdminService,private route:ActivatedRoute) { }

  onSubmit(){
    if((this.flight.airlineName!=null && this.flight.arrivalCity!=null && this.flight.bussinessSeat!=null &&this.flight.dateOfDeparture!=null && this.flight.departureCity!=null && this.flight.flightNumber!=null && this.flight.meal!=null && this.flight.nonBussinessSeat!=null && this.flight.price!=null)&&(this.flight.airlineName!='' && this.flight.arrivalCity!='' && this.flight.dateOfDeparture!='' && this.flight.departureCity!='' && this.flight.flightNumber!='' && this.flight.meal!='')){
      this.adminService.updateFlight(this.flight).subscribe(response=>{
        console.log(response);
        this.msg="Flight Updated Successfully"
       },error=>{
       console.log(error);
       this.err="Some Thing Went Wrong"
       })
    }
  }

  ngOnInit(): void {
    this.adminService.getCurrentFlight(this.route.snapshot.params.id).subscribe(response=>{
      this.flight=response as Flight;
    })
  }

}
