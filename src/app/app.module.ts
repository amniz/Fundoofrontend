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
import { Component } from "@angular/core";
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
import { NoteComponent } from "./component/note/note.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MydialogueComponent } from "./component/mydialogue/mydialogue.component";
import { ReminderComponent } from "./component/reminder/reminder.component";
import { ExpansionboxComponent } from "./component/expansionbox/expansionbox.component";
import { TrashComponent } from "./component/trash/trash.component";
import { ArchieveComponent } from "./component/archieve/archieve.component";
import { LabelComponent } from "./component/label/label.component";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    NoteComponent,
    MydialogueComponent,
    ReminderComponent,
    ExpansionboxComponent,
    TrashComponent,
    ArchieveComponent,
    LabelComponent
  ],
  entryComponents: [MydialogueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
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
    MatCardModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [NoteService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
