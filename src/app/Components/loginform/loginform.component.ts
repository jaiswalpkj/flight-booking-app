import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  msg: string;

  credentials = {
    userName: '',
    password: ''
  }

  onSubmit() {
    if ((this.credentials.userName != '' && this.credentials.password != '') && (this.credentials.userName != null && this.credentials.password != null)) {

      // generate the token
      this.loginservice.generateToken(this.credentials).subscribe((response: any) => {
        console.log(response.token);
        this.loginservice.loginUser(response.token);
        window.location.href = "/dashboard"
      }, error => {
        console.log(error);
        this.msg="Bad Credentails";
      })
    }
    else {
      console.log('fields are empty');
      //this.msg="Fields are Empty"
    }
  }
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

}
