import { AirlineService } from "../services/airline.service";
import Airline from "./Airline";

export default class Flight{
    id:number;
    flightNumber:string
    airlineName:string;
    departureCity:string;
    arrivalCity:string;
    meal:string;
    dateOfDeparture:string;
    bussinessSeat:number;
    nonBussinessSeat:number;
    price:number;
    airline:Airline;
}