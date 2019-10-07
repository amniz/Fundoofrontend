import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { NoteService } from "src/app/note.service";
@Component({
  selector: "app-collaboratordialog",
  templateUrl: "./collaboratordialog.component.html",
  styleUrls: ["./collaboratordialog.component.scss"]
})
export class CollaboratordialogComponent implements OnInit {
  data1;
  owner;
  collaboratedUsers: any = [];
  collaborateEmail;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NoteService
  ) {}

  ngOnInit() {
    this.owner = "";
    this.collaborateEmail = "";
    this.data.email = "";
    this.collaboratedUsers = "";
    this.getuser();
  }

  getuser() {
    this.data1 = {
      user: this.data["user"],
      collaborated_id: this.data["collaborator"]
    };

    this.noteservice.getUserDetails(this.data1).subscribe(response => {
      this.owner = response["data"]["owner_user"];
      this.collaboratedUsers = response["data"]["collaborated_users"];
    });
  }

  deleteCollaborator(email, id) {
    let del = {
      email: email,
      id: id
    };
    this.noteservice.deleteCollaborator(del).subscribe(response => {
      this.noteservice.getnotes();
      this.getuser();
      console.log(response);
    }),
      error => {
        console.log(error);
      };
  }

  collaborate(data, id) {
    let data1 = {
      collaborator: data
    };
    this.noteservice.setCollaborator(data1, id).subscribe(
      response => {
        console.log("our", response);
        this.getuser();
      },
      error => {
        console.log(error);
      }
    );
  }
}
