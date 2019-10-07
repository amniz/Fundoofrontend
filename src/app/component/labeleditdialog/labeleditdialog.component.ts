import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { NoteService } from "src/app/note.service";
@Component({
  selector: "app-labeleditdialog",
  templateUrl: "./labeleditdialog.component.html",
  styleUrls: ["./labeleditdialog.component.scss"]
})
export class LabeleditdialogComponent implements OnInit {
  labels: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NoteService
  ) {}

  ngOnInit() {
    this.labels = "";
    this.getlabels();
  }
  getlabels() {
    this.noteservice.getlabels().subscribe(response => {
      this.labels = response.message;
      console.log("labels", response.message);
    });
  }
}
