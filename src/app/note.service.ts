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
  // profileimage(): Observable<any> {
  //   return this.http.post("http://127.0.0.1:8000/upload");
  // }
}
