import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { Expansion } from "@angular/compiler";
import { MatDialog } from "@angular/material";
import { MydialogueComponent } from "../mydialogue/mydialogue.component";
import { NoteDetails} from "../../model/note-details"
@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  myNote: any = [];
  titletoggle: boolean = false;
  expansion = true;
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
  myexpand() {
    this.expansion = !this.expansion;
    console.log("expand", this.expansion);
  }
  mycollapse() {
    if (this.expansion == false) {
      this.expansion = !this.expansion;
    }
  }
  opendialog(id) {
    this.dialog.open(MydialogueComponent,{data:this.myNote[id]});
  }
}
