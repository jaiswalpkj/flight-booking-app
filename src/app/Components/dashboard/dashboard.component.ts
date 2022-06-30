import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private airlineService: AirlineService) {}

  admin:any

  getAdmin() {
    this.airlineService.getAdmin().subscribe(admin => {
      console.log(admin);
      this.admin=admin

    }, error => {
      console.log(error);

    })
  }

  ngOnInit(): void {
  }

}
