import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class NoteService {
  constructor(private http: HttpClient) {}
  loginUser(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000", data);
  }
  loggenIn() {
    return !!localStorage.getItem("token");
  }
  registerUser(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/register", data);
  }
  forgotpassword(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/forgot", data);
  }
  resetpassword(data, token): Observable<any> {
    return this.http.post(
      "http://127.0.0.1:8000/resetpassword/token",
      data,
      token
    );
  }
  getimage(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/getprofilepic");
  }
  logout(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/logout");
  }

  getnotes(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/Note");
  }
  changecolor(id, data): Observable<any> {
    return this.http.put("http://127.0.0.1:8000/Note/" + id, data);
  }
  addnote(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/Note", data);
  }
  getreminder(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/reminder");
  }

  getTrash(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/trash");
  }
  getArchieve(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/archieve");
  }
  getlabels(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/labels");
  }
  getlabelnote(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/getlabel", data);
  }
  getUserDetails(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/userdetails", data);
  }
  deleteCollaborator(data): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/deletecollaborator", data);
  }
  setCollaborator(data, id): Observable<any> {
    return this.http.put("http://127.0.0.1:8000/Note/" + id, data);
  }
  putNotes(data, id): Observable<any> {
    return this.http.put("http://127.0.0.1:8000/Note/" + id, data);
  }
  deleteNote(data): Observable<any> {
    return this.http.delete("http://127.0.0.1:8000/Note", data);
  }
  // profileimage(): Observable<any> {
  //   return this.http.post("http://127.0.0.1:8000/upload");
  // }
}
