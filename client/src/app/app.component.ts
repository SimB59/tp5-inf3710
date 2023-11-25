import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DisplayServiceService } from "./services/display-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    public route: string;

    public constructor(location: Location, router: Router, public service: DisplayServiceService) {
        router.events.subscribe((_val: any) => {
            if (location.path() !== "") {
              this.route = location.path();
            } else {
              this.route = "";
            }
          });
          this.service.loadData();
    }

    public readonly title: string = "INF3710 TP4";
    public ngOnInit(): void { }
}
