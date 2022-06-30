import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './Components/add-airline/add-airline.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { AirlineListComponent } from './components/airline-list/airline-list.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchComponent } from './components/search/search.component';
import { TicketbookPageComponent } from './components/ticketbook-page/ticketbook-page.component';
import { UpdateFlightComponent } from './Components/update-flight/update-flight.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ViewByEmailComponent } from './Components/view-by-email/view-by-email.component';
import { ViewByPNRComponent } from './Components/view-by-pnr/view-by-pnr.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginformComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },

  {
    path:'addAirline',
    component:AddAirlineComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'addFlight',
    component:AddFlightComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'flightList',
    component:FlightListComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'airlineList',
    component:AirlineListComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'updateFlight/:id',
    component:UpdateFlightComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },

  // user views

  {
    path:'userdashboard',
    component:UserdashboardComponent,
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchComponent,
    pathMatch:'full'
  },
  {
    path:'searchlist',
    component:SearchListComponent,
    pathMatch:'full'
  },
  {
    path:'book/:id',
    component:BookFlightComponent,
    pathMatch:'full'
  },
  {
    path:'lastticket',
    component:TicketbookPageComponent,
    pathMatch:'full'
  },
  {
    path:'pnrticket',
    component:ViewByPNRComponent,
    pathMatch:'full'
  },
  {
    path:'viewTicket',
    component:ViewByEmailComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
