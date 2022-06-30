import { Component, OnInit } from '@angular/core';
import Reservation from 'src/app/Entity/Reservation';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ticketbook-page',
  templateUrl: './ticketbook-page.component.html',
  styleUrls: ['./ticketbook-page.component.css']
})
export class TicketbookPageComponent implements OnInit {

  reservation:Reservation=new Reservation;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getLastTicket().subscribe(result=>{
      console.log(result);
      this.reservation = result as Reservation;
    },error=>{
       //console.log(error);   
    })
  }

}
