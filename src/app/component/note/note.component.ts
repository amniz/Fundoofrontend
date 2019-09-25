import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  myNote: any = [];
  id: any;
  note: any;
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.getnotes();
    this.backgroundcolor(this.id, this.note);
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
    let data1 = {
      color: data
    };
    console.log(data1);
    this.noteservice.changecolor(id, data1).subscribe(
      response => {
        console.log("backgorund color changed", response);
      },
      error => {
        console.log("error", error);
      }
    );
  }
  titlechange(note) {}
}
interface NoteInter {
  title: string;
  note: string;
  reminder: any;
  collaborator: any;
  image: any;
  color: any;
}
