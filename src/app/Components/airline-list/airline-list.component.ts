import { Component, OnInit } from '@angular/core';
import Airline from 'src/app/Entity/Airline';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airline:Airline;
  airlines:Airline[];
  enb:string;
  dis:string;

  constructor(private adminService:AdminService) { }

  deleteRow(airline, index) {
    const observable = this.adminService.deleteAirline(airline);
    observable.subscribe((response: any) => {
      this.airlines.splice(index, 1)
    })
  }

  enable(airline,id){
    this.adminService.enableAirline(this.airline,id).subscribe(() => {
      this.enb='Airline Enabled Successfully'
    })
  }

  disable(airline,id){
    this.adminService.disableAirline(this.airline,id).subscribe(() => {
      this.dis='Airline Disabled Successfully'
    })
  }


  ngOnInit(): void {
    this.adminService.getAllAirline().subscribe(response=>{
    console.log(response);
     this.airlines=response as Airline[];
    },error=>{
      console.log(error);
      
    })
  }

}
