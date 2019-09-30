import { Component, OnInit } from "@angular/core";
import { NoteDetails } from "../../model/note-details";
import { NoteService } from "src/app/note.service";

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
}
