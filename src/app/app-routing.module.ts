import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { ForgotpasswordComponent } from "./component/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent } from "./component/resetpassword/resetpassword.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  {
    path: "resetpassword/:token",
    component: ResetpasswordComponent
  }
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
