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
  newname;
  labell;
  newLabelName;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NoteService
  ) {}

  ngOnInit() {
    this.labels = "";
    this.getlabels();
    this.labell = "";
  }
  getlabels() {
    this.noteservice.getlabels().subscribe(response => {
      this.labels = response.message;
      console.log("labels", response.message);
    });
  }
  updatelabel(name) {
    let data = {
      name: name,
      newname: this.labell
    };
    this.noteservice.putlabel(data).subscribe(
      response => {
        console.log(response);
        this.getlabels();
      },
      error => {
        console.log(error);
      }
    );
  }

  addNewLabel() {
    let data = {
      name: this.newLabelName
    };
    this.noteservice.addLabel(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
