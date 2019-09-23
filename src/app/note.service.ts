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
  resetpassword(data): Observable<any> {
    let token = localStorage.getItem("token");
    return this.http.post("http://127.0.0.1:8000/reset/token", data);
  }
}
