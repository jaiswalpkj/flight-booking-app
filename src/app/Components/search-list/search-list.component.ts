import { Component, OnInit } from '@angular/core';
import Flight from 'src/app/Entity/Flight';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  flights:Flight[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //  this.flights=this.userService.getFlightDetails();
    // console.log(this.flights);
  }

}
