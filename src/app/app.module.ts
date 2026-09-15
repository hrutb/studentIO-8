import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { MemoryTestComponent } from './shared/component/memory-test/memory-test.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    GetConfirmComponent,
    MemoryTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    FormsModule ,
    MatButtonModule ,
    MatSnackBarModule ,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
