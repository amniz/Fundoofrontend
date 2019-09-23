import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NoteService } from "./note.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authservice: NoteService, private _router: Router) {}
  canActivate(): boolean {
    if (this._authservice.loggenIn()) {
      return true;
    } else {
      this._router.navigate([""]);
      return false;
    }
  }
}
