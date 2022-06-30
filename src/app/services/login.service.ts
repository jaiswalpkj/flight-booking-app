import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   Base_URL = "http://ec2-65-0-30-232.ap-south-1.compute.amazonaws.com:8085/auth";
   
  //calling server to generate token

generateToken(credentials:any){
 //generate token
 return this.http.post(`${this.Base_URL}/login`,credentials,httpOptions)};

  constructor( private http:HttpClient) { }

  //for login user
  loginUser(token) {
    localStorage.setItem("token", token);
    return true;
  }

  // to check user is login or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == null || token === '') {
      return false;
    } else {
      return true;
    }
  }

  // for logout user
  logoutUser() {   
    return localStorage.removeItem("token");
  }

  //for getting token
  getToken(){
   return localStorage.getItem("token");
  }

}
