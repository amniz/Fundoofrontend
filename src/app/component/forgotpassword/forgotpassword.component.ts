import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.scss"]
})
export class ForgotpasswordComponent implements OnInit {
  useremail;
  constructor(private forgot: NoteService) {}

  ngOnInit() {
    this.useremail = {
      email: ""
    };
  }
  onclick() {
    this.forgot.forgotpassword(this.useremail).subscribe(
      response => {
        alert("email sended");
      },
      error => {
        alert("some error had been seen");
      }
    );
  }
}
