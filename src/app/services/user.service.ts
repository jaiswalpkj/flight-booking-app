import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Flight from '../Entity/Flight';

const BASE_URL="http://ec2-65-0-30-232.ap-south-1.compute.amazonaws.com:8086/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  flights:Flight[];

searchFlight(search){
  return this.http.get(BASE_URL+'/searchFlight/'+search.date+'/'+search.from+'/'+search.to)
}

getFlight(id){
  return this.http.get(BASE_URL+'/flight/'+id)
}

bookFlight(reservation:any,id){
  return this.http.post(BASE_URL+'/bookflight/'+id,reservation)
}

getLastTicket(){
  return this.http.get(BASE_URL+'/last')
}

findTicketByPnr(pnr){
  return this.http.get(BASE_URL+'/ticket/'+pnr)
}

findTicketByEmail(email){
  return this.http.get(BASE_URL+'/booking/history/'+email)
}

deleteTicket(reservation:any){
 return this.http.delete(BASE_URL+'/cancel/'+reservation.id)
}

// setFlightDetails(data){
//   this.flights=data;
// }

// getFlightDetails(){
//   return this.flights;
// }

  constructor(private http:HttpClient) { }
}
