import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClarityModule} from "@clr/angular";
import {
  IssueListComponent,
  IssueReportComponent
} from './components';
import {IssuesService} from "./services";
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
