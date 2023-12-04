import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayPageComponent } from './display-page/display-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DisplayEntryComponent } from './display-entry/display-entry.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { ModificationComponentComponent } from './modification-component/modification-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    AddPageComponent,
    DisplayEntryComponent,
    DeleteComponentComponent,
    ModificationComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
