import { Component, OnInit } from "@angular/core";
import { NoteDetails } from "../../model/note-details";
import { NoteService } from "src/app/note.service";
@Component({
  selector: "app-trash",
  templateUrl: "./trash.component.html",
  styleUrls: ["./trash.component.scss"]
})
export class TrashComponent implements OnInit {
  myNote = new Array<NoteDetails>();
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.getTrash();
  }
  getTrash() {
    this.noteservice.getTrash().subscribe(
      response => {
        this.myNote = response.message.data;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
