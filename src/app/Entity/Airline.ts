import Flight from "./Flight";

export default class Airline{
    id:number;
    airlineName;
    logo:string;
    phone:string;
    address:string;
    isActive:boolean;
    flights:Flight[];
}