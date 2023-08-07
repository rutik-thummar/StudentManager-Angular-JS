import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  visible: boolean = true;
  changetype: boolean = true;

  ngOnInit() {
  }
  constructor(private _service: RegistrationService, private _route: Router) { }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response recieved"),
          this._route.navigate(['/studentlist'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credentials ,please enter valid emailId and password.";

      }
    );
  }
  gotoregistrasion() {
    this._route.navigate(['/registration'])
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


  // getUrl()
  // {
  //   return "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoc_gQS0MWUfdVLrZX6rWrG6bzhz9LEXMAYg&usqp=CAU')";
  // }
}
