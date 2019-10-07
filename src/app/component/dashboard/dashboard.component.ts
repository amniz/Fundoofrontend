import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { MydialogueComponent } from "../mydialogue/mydialogue.component";
import {LabeleditdialogComponent} from "../labeleditdialog/labeleditdialog.component"
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  opened = true;
  profileview = false;
  image;
  myVar;
  public labelss;
  currentdashboard = "notes";
  routes = [
    { linkName: "reminder", url: "reminder" },
    { linkName: "notes", url: "notes" }
  ];
  constructor(
    private noteservice: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog:MatDialog
  ) {
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

  ngOnInit() {
    this.myVar = "";
  }
  logout() {
    localStorage.removeItem("token");
    this.noteservice.logout();
    this.router.navigate([""]);
  }
  notes() {
    this.router.navigate(["notes"], { relativeTo: this.route });
  }
  trash() {
    this.router.navigate(["trash"], { relativeTo: this.route });
  }
  reminder() {
    this.router.navigate(["reminder"], { relativeTo: this.route });
  }
  archieve() {
    this.router.navigate(["archieve"], { relativeTo: this.route });
  }
  mylabel() {
   
    this.router.navigate(["labels", this.labelss], {
      relativeTo: this.route
    });
    console.log("kooi", this.labelss);
  }
  editLabel() {
    this.dialog.open(LabeleditdialogComponent)
  }
}
