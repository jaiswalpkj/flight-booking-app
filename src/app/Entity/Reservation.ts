import Flight from "./Flight";
import Passenger from "./Passenger";

export default class Reservation{
    id:number;
    email:string;
    pnr:number;
    passenger:Passenger;
    flight:Flight;
}