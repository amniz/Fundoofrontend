import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { NoteDetails } from "../../model/note-details";
import { NoteService } from "src/app/note.service";
@Component({
  selector: "app-mydialogue",
  templateUrl: "./mydialogue.component.html",
  styleUrls: ["./mydialogue.component.scss"]
})
export class MydialogueComponent implements OnInit {
  noteObject: NoteDetails["note"];
  title;
  note;
  data1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NoteService
  ) {}

  ngOnInit() {
    this.noteObject = this.data;
    this.data1 = {
      title: "",
      note: "",
      reminder: "",
      collaborator: "",
      image: "",
      color: ""
    };
  }
  updateNote() {
    this.noteservice.putNotes(this.data, this.data.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
