import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component'
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
//import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { SearchComponent } from './components/search/search.component';
//import { authInterceptorProviders } from './services/auth.interceptor';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchListComponent } from './components/search-list/search-list.component';
import {MatTableModule} from '@angular/material/table';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import {MatRadioModule} from '@angular/material/radio';
import { TicketbookPageComponent } from './components/ticketbook-page/ticketbook-page.component';
import { ViewByPNRComponent } from './Components/view-by-pnr/view-by-pnr.component'
import { ViewByEmailComponent } from './Components/view-by-email/view-by-email.component';
import { AddAirlineComponent } from './Components/add-airline/add-airline.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { AirlineListComponent } from './components/airline-list/airline-list.component';
import { UpdateFlightComponent } from './Components/update-flight/update-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    SearchComponent,
    SearchListComponent,
    BookFlightComponent,
    TicketbookPageComponent,
    ViewByPNRComponent,
    ViewByEmailComponent,
    AddAirlineComponent,
    AddFlightComponent,
    FlightListComponent,
    AirlineListComponent,
    UpdateFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [[
    { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true }
  ]],
  //providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
