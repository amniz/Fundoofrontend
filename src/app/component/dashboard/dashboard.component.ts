import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  opened = false;
  profileview = false;
  image;
  constructor(private noteservice: NoteService, private router: Router) {
    this.profilepicgett();
  }

  profilepicgett() {
    this.noteservice.getimage().subscribe(
      response => {
        console.log(response["id"]);
        this.image = response["id"];
        console.log("image", this.image);
        // alert("profile picture uploaded");
      },
      error => {
        // alert("something went wrong");
      }
    );
  }

  ngOnInit() {}
  logout() {
    localStorage.removeItem("token");
    this.noteservice.logout();
    this.router.navigate([""]);
  }
}
