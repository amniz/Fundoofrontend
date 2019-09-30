import { NoteService } from "../note.service";
export class NoteDetails {
  note: {
    title: string;
    note: string;
    reminder: any;
    collaborator: any;
    image: any;
    color: any;
  };
  mynote: any = [];
  constructor(private noteservice: NoteService) {}
  getnotes() {
    this.noteservice.getnotes().subscribe(
      response => {
        for (let i = 0; i < response.message[0].data; i++) {
          this.mynote[i] = response.message[0].data[i];
        }
      },
      error => {
        console.log("error");
      }
    );
  }
}
