import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { NoteDetails } from "../../model/note-details";
@Component({
  selector: "app-reminder",
  templateUrl: "./reminder.component.html",
  styleUrls: ["./reminder.component.scss"]
})
export class ReminderComponent implements OnInit {
  myNote = new Array<NoteDetails>();
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.getreminders();
  }
  getreminders() {
    this.noteservice.getreminder().subscribe((response: any) => {
      console.log(response);
      this.myNote = response.message.data;
      console.log(response.message.data);
    });
  }
}
