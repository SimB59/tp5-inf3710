import { Component } from '@angular/core';
import { DisplayServiceService } from '../services/display-service.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent {

  constructor(public displayService: DisplayServiceService) { }
}
