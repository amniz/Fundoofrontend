import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { NoteDetails } from "../../model/note-details";
@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"]
})
export class LabelComponent implements OnInit {
  labels: any = [];
  labelnotes = new Array<NoteDetails>();
  data;
  constructor(private noteservice: NoteService) {}

  ngOnInit() {
    this.data = "";
    this.getlabels();
  }
  getlabels() {
    this.noteservice.getlabels().subscribe(response => {
      this.labels = response.message;
      console.log("labels", response.message);
    });
  }
  getlabeldetails(data1) {
    console.log("inside ", data1);
    this.data = {
      name: data1
    };
    console.log("olakka", this.data);
    this.noteservice.getlabelnote(this.data).subscribe(response => {
      console.log(response);
      this.labelnotes = response.message;
      console.log("label note", this.labelnotes);
    });
  }
}
