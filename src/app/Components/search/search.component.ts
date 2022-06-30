import { Component, OnInit } from '@angular/core';
import Flight from 'src/app/Entity/Flight';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService:UserService) { }

  msg:string;
   flights:Flight[];

  search:any = {
    from: '',
    to: '',
    date: ''
  }

  onSubmit() {

    if ((this.search.from != '' && this.search.to != '' && this.search.date != '') && (this.search.from != null && this.search.to != null && this.search.date != null)) {
         this.userService.searchFlight(this.search).subscribe(response=>{
          console.log(response);         
             this.flights=response as Flight[];
             console.log(this.flights);
            // this.userService.setFlightDetails(this.flights);     
             //window.location.href="/searchlist"             
        },error=>{
          console.log(error);
          this.msg="Not Flights Found"      
        });
    }

  }
  ngOnInit(): void {
   // this.userService.setFlightDetails(this.flights);
  }

}
