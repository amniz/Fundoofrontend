import { Component, OnInit } from "@angular/core";
import { NoteDetails } from "../../model/note-details";
import { NoteService } from "src/app/note.service";
@Component({
  selector: "app-expansionbox",
  templateUrl: "./expansionbox.component.html",
  styleUrls: ["./expansionbox.component.scss"]
})
export class ExpansionboxComponent implements OnInit {
  expansion = true;
  noteObject: NoteDetails["note"];
  newNote: any;
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.noteObject = {
      title: "",
      note: "",
      reminder: "",
      collaborator: "",
      image: "",
      color: ""
    };
  }
  myexpand() {
    this.expansion = !this.expansion;
    console.log("expand", this.expansion);
  }
  mycollapse() {
    console.log("collapse");
    let data = {};
    if (
      this.noteObject.title == "" &&
      this.noteObject.note == "" &&
      this.noteObject.reminder == "" &&
      this.noteObject.collaborator == "" &&
      this.noteObject.image == "" &&
      this.noteObject.color == ""
    ) {
      if (this.expansion == false) {
        this.expansion = !this.expansion;
      }
    } else {
      console.log("gyhu");
      if (this.noteObject.title != "") {
        data["title"] = this.noteObject.title;
      }
      if (this.noteObject.note != "") {
        data["note"] = this.noteObject.note;
      }
      if (this.noteObject.reminder != "") {
        data["reminder"] = this.noteObject.reminder;
      }
      if (this.noteObject.collaborator != "") {
        data["collaborator"] = this.noteObject.collaborator;
      }
      if (this.noteObject.image != "") {
        data["image"] = this.noteObject.image;
      }
      if (this.noteObject.color != "") {
        data["color"] = this.noteObject.color;
      }

      this.noteservice.addnote(data).subscribe(
        response => {
          console.log(response);
          this.noteservice.getnotes().subscribe(
            response => {
              console.log("notes", response);
            },
            error => {
              console.log("error", error);
            }
          );
        },
        error => {
          console.log(error);
        }
      );

      if (this.expansion == false) {
        this.expansion = !this.expansion;
      }
    }
  }
}
