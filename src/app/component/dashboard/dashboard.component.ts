import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  opened = false;
  profileview = false;
  image;
  constructor(private profilepic: NoteService) {
    this.profilepicgett();
  }

  profilepicgett() {
    this.profilepic.getimage().subscribe(
      response => {
        console.log(response["id"]);
        this.image = response["id"];
        console.log("image", this.image);
        alert("profile picture uploaded");
      },
      error => {
        alert("something went wrong");
      }
    );
  }

  ngOnInit() {}
  onlick() {}
}
