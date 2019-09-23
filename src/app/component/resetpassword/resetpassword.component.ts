import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.component.html",
  styleUrls: ["./resetpassword.component.scss"]
})
export class ResetpasswordComponent implements OnInit {
  newpassword;
  constructor(private resetpassword: NoteService) {}

  ngOnInit() {
    this.newpassword = {
      password: "",
      password1: ""
    };
  }
  onclick() {
    this.resetpassword.resetpassword(this.newpassword).subscribe(
      response => {
        alert("password reset");
      },
      error => {
        alert("password reset failed");
      }
    );
  }
}
