import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private registerService: NoteService) {}

  ngOnInit() {
    this.register = {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: ""
    };
  }
  onclick() {
    this.registerService.registerUser(this.register).subscribe(
      response => {
        alert("response");
        alert("please conform your email for activation");
      },
      error => {
        alert("error");
      }
    );
  }
}
