import { Component, OnInit, Input } from "@angular/core";
import { NoteService } from "src/app/note.service";
import { NoteDetails } from "../../model/note-details";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-labelcontent",
  templateUrl: "./labelcontent.component.html",
  styleUrls: ["./labelcontent.component.scss"]
})
export class LabelcontentComponent implements OnInit {
  myNote: any = [];
  labelnotes = new Array<NoteDetails>();
  data;
  labelvalue;
  labelval;
  @Input() label;
  constructor(
    private noteservice: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.data = "";
    this.labelval = this.route.snapshot.paramMap.get("name");
    this.labelvalue = {
      name: this.labelval
    };

    this.noteservice.getlabelnote(this.labelvalue).subscribe(response => {
      console.log(response);
      this.myNote = response.message;
      console.log(this.labelnotes);
    });
  }
  // getlabelcontents(this.labelvalue) {
  //   console.log("olakka", this.labelvalue);
  //   this.noteservice.getlabelnote(this.data).subscribe(response => {
  //     console.log(response);
  //     this.labelnotes = response.message;
  //     console.log("label note", this.labelnotes);
  //   });
  // }
  demo() {
    console.log("ddd", this.route.snapshot.paramMap.get("name"));
  }
}
