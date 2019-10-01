import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { NoteDetails } from "../../model/note-details";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"]
})
export class LabelComponent implements OnInit {
  labels: any = [];
  labelnotes = new Array<NoteDetails>();
  data;
  link;
  labelname1;

  @Output() public labelname = new EventEmitter();
  constructor(
    private noteservice: NoteService,
    private router: Router // private route: ActivatedRoute
  ) {}

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
  getLabelName(data) {
    this.labelname1 = data;
    this.labelname.emit(this.labelname1);
    this.router.navigate(["labels/:data"]);
  }
  // getlabeldetails(label) {
  //   this.router.navigate(["/labels", label]);
  // }
}
