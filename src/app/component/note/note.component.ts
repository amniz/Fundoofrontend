import { Component, OnInit, Input } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Expansion } from "@angular/compiler";
import { MatDialog } from "@angular/material";
import { MydialogueComponent } from "../mydialogue/mydialogue.component";
import { NoteDetails } from "../../model/note-details";
import { CollaboratordialogComponent } from "../collaboratordialog/collaboratordialog.component";
@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  myNote: any = [];
  originalNote = [];
  collaboratedNotes: any = [];
  titletoggle: boolean = false;
  backgroundcolorNote;
  notewidth;
  flexview: string;
  fxalign: string;
  constructor(private noteservice: NoteService, public dialog: MatDialog) {}

  ngOnInit() {
    myNote: {
      color: "";
      this.noteservice.currentview.subscribe(message => {
        this.flexview = message;
        if (message == "row") {
          this.fxalign = "space-around end";
          this.notewidth = "25px";
        } else {
          this.fxalign = "space-around stretch";
          this.notewidth = "50px";
        }
      });
    }
    this.getnotes();
    this.backgroundcolorNote = "";
  }

  getnotes() {
    this.noteservice.getnotes().subscribe((response: any) => {
      console.log("hurrai", response);
      console.log("response message", response.message);
      console.log("response message[0]", response.message[0]);
      // if (response.message[0].data == []) {
      //   console.log("not hurrai");
      //   this.myNote = response.message[0].collaboratednotes;
      // } else if (response.message[0].collaboratednotes == undefined) {
      //   this.myNote = response.message[0].data;
      // } else {
      this.originalNote = response.message.data;

      this.collaboratedNotes = response.message.collaboratednotes;
      this.myNote = this.originalNote.concat(this.collaboratedNotes);
      console.log("evale oo", this.myNote);
      // }
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
      if (this.myNote[i].id == id) {
        this.dialog.open(MydialogueComponent, { data: this.myNote[i] });
      }
    }
  }

  collaboratorDialog(id) {
    console.log("on dialog", id);

    for (let i = 0; i < this.myNote.length; i++) {
      if (this.myNote[i].id == id) {
        this.dialog.open(CollaboratordialogComponent, { data: this.myNote[i] });
      }
    }
  }

  makearchieve(id) {
    let data = {
      archieve: "True"
    };
    this.noteservice.putNotes(data, id).subscribe(response => {
      console.log("yes");
    });
  }

  deleteNote(id) {
    let deldata = {
      is_trash: "True"
    };
    this.noteservice.putNotes(deldata, id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
