import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { DisplayPageComponent } from "../display-page/display-page.component";
import { AddPageComponent } from "../add-page/add-page.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "display", component: DisplayPageComponent},
  { path: "add", component: AddPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
