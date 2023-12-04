import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DisplayServiceService } from "./services/display-service.service";
import { AddPageComponent } from "./add-page/add-page.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    public route: string;

    public constructor(location: Location, router: Router, public service: DisplayServiceService, public dialog: MatDialog) {
        router.events.subscribe((_val: any) => {
            if (location.path() !== "") {
              this.route = location.path();
            } else {
              this.route = "";
            }
          });
          this.service.loadData();
    }

    public readonly title: string = "INF3710 TP5";
    public ngOnInit(): void { }

    openAddDialog() {
      const dialogRef = this.dialog.open(AddPageComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.service.loadData();
      });
    }
}
