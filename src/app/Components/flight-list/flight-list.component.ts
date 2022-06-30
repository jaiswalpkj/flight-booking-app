import { Component, OnInit } from '@angular/core';
import Flight from 'src/app/Entity/Flight';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  flight:Flight
  flights:Flight[];
  enb:string;
  dis:string;

  deleteRow(flight,index){
    const observable = this.adminService.delteFlight(flight);
    observable.subscribe((response: any) => {
      this.flights.splice(index, 1)
    })
  }

  ngOnInit(): void {
    this.adminService.getAllFlight().subscribe(response=>{
      console.log(response);
       this.flights=response as Flight[];
      },error=>{
        console.log(error);
        
      })
  }

}
