import { Component, OnInit } from "@angular/core";
import { NoteDetails } from "../../model/note-details";
import { NoteService } from "src/app/note.service";
import { NoteComponent } from "../note/note.component";
@Component({
  selector: "app-archieve",
  templateUrl: "./archieve.component.html",
  styleUrls: ["./archieve.component.scss"]
})
export class ArchieveComponent implements OnInit {
  myNote = new Array<NoteDetails>();
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.getarchieve();
  }
  getarchieve() {
    this.noteservice.getArchieve().subscribe(response => {
      this.myNote = response.message.data;
      console.log(response);
    });
  }
  makearchieve(id) {
    let data = {
      archieve: "False"
    };
    this.noteservice.putNotes(data, id).subscribe(response => {
      console.log("yes");
      this.getarchieve();
    });
  }
}
