import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";

import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { NoteService } from "./note.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { AuthGuard } from "./auth.guard";
import { ForgotpasswordComponent } from "./component/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent } from "./component/resetpassword/resetpassword.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    CommonModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [NoteService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
