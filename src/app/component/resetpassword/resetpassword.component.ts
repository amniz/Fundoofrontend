import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.component.html",
  styleUrls: ["./resetpassword.component.scss"]
})
export class ResetpasswordComponent implements OnInit {
  newpassword;
  constructor(
    private resetpassword: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.newpassword = {
      password: "",
      password1: ""
    };
  }
  onclick() {
    let token = this.route.snapshot.paramMap.get("token");
    this.resetpassword.resetpassword(this.newpassword, token).subscribe(
      response => {
        alert("password reset");
        this.router.navigate(["/login"]);
      },
      error => {
        alert("password reset failed");
      }
    );
  }
}
