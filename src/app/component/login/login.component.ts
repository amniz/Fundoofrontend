import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../note.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login;
  constructor(private loginservice: NoteService, private router: Router) {}

  ngOnInit() {
    this.login = {
      username: "",
      password: ""
    };
  }
  onclick() {
    this.loginservice.loginUser(this.login).subscribe(
      response => {
        localStorage.setItem("token", response[0]);
        this.router.navigate(["/dashboard"]);
      },
      error => {
        alert(error[0].message);
        console.log(Response);
      }
    );
  }
}
