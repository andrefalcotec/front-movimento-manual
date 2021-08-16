import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { DisplayTableComponent } from './display-table/display-table.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertFormComponent,
    DisplayTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule 
  ],
  providers: [DisplayTableComponent,InsertFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
