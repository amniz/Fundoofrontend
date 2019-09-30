import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Expansion } from "@angular/compiler";
import { MatDialog } from "@angular/material";
import { MydialogueComponent } from "../mydialogue/mydialogue.component";
import { NoteDetails } from "../../model/note-details";
@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  myNote: any = [];
  titletoggle: boolean = false;

  constructor(private noteservice: NoteService, public dialog: MatDialog) {}

  ngOnInit() {
    myNote: {
      color: "";
    }
    this.getnotes();
  }

  getnotes() {
    this.noteservice.getnotes().subscribe((response: any) => {
      this.myNote = response.message[0].data;
      console.log(response.message[0].data);
    });
  }
  reminder(note) {
    note.reminder;
  }
  backgroundcolor(id, data) {
    console.log("id", id);
    console.log(this.myNote[id]);
    let data1 = {
      color: data
    };

    this.noteservice.changecolor(id, data1).subscribe(
      response => {
        console.log("backgorund color changed", response);
        this.getnotes();
      },
      error => {
        console.log("error", error);
      }
    );
  }

  titlechange(note) {}

  opendialog(id) {
    console.log("on dialog", id);

    for (let i = 0; i < this.myNote.length; i++) {
      console.log(this.myNote[i].id);
      if (this.myNote[i].id == id) {
        console.log("after", this.myNote[i]);
        this.dialog.open(MydialogueComponent, { data: this.myNote[i] });
      }
    }
  }
}
