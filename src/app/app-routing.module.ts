import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { ForgotpasswordComponent } from "./component/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent } from "./component/resetpassword/resetpassword.component";
import { ReminderComponent } from "./component/reminder/reminder.component";
import { TrashComponent } from "./component/trash/trash.component";
import { ArchieveComponent } from "./component/archieve/archieve.component";
import { LabelComponent } from "./component/label/label.component";
import { NoteComponent } from "./component/note/note.component";
import { LabelcontentComponent } from "./component/labelcontent/labelcontent.component";
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "labels/:name",
        component: LabelcontentComponent,
        pathMatch: "full"
      },
      { path: "", redirectTo: "notes", pathMatch: "full" },
      {
        path: "notes",
        component: NoteComponent
      },
      { path: "reminder", component: ReminderComponent },
      { path: "trash", component: TrashComponent },
      { path: "archieve", component: ArchieveComponent }
    ]
  },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  {
    path: "resetpassword/:token",
    component: ResetpasswordComponent
  }
  // {
  //   path: "labels/:name",
  //   component: LabelcontentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  DashboardComponent
];
