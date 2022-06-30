import { Component, OnInit } from '@angular/core';
import Airline from 'src/app/Entity/Airline';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  airline:Airline=new Airline;
  msg:string
  err:string

  constructor(private adminService:AdminService) { }

  onSubmit(){

    if((this.airline.airlineName!=null && this.airline.address!=null && this.airline.phone!=null)&&(this.airline.airlineName!='' && this.airline.address!='' && this.airline.phone!='')){
     this.adminService.addAirline(this.airline).subscribe(response=>{
      console.log(response);
      this.msg="Airline Added Successfully"
     },error=>{
     console.log(error);
     this.err="Airline already added"
     })
    }
  }

  ngOnInit(): void {
  }

}
