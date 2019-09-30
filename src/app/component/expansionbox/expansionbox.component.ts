import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-expansionbox",
  templateUrl: "./expansionbox.component.html",
  styleUrls: ["./expansionbox.component.scss"]
})
export class ExpansionboxComponent implements OnInit {
  expansion = true;
  constructor() {}

  ngOnInit() {}
  myexpand() {
    this.expansion = !this.expansion;
    console.log("expand", this.expansion);
  }
  mycollapse() {
    if (this.expansion == false) {
      this.expansion = !this.expansion;
    }
  }
}
