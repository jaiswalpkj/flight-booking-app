import { Component, OnInit } from '@angular/core';
import Reservation from 'src/app/Entity/Reservation';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-by-pnr',
  templateUrl: './view-by-pnr.component.html',
  styleUrls: ['./view-by-pnr.component.css']
})
export class ViewByPNRComponent implements OnInit {

  constructor(private userService: UserService) { }

  reservation: Reservation;
  msg:string

  pnr = {
    pnr: '',
  }

  onSubmit() {
    if (this.pnr.pnr != null && this.pnr.pnr != '') {
      this.userService.findTicketByPnr(this.pnr.pnr).subscribe(response=>{
          console.log(response);
          this.reservation=response as Reservation;      
      },error=>{
      console.log(error);
      this.msg='No Tickets Found'
      })
    }
  }

  ngOnInit(): void {
  }

}
