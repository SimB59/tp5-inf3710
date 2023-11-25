import { Component, Input, OnInit } from '@angular/core';
import { Medecins } from '../display-page/medecins';
import { DisplayServiceService } from '../services/display-service.service';

@Component({
  selector: 'app-display-entry',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.css']
})
export class DisplayEntryComponent implements OnInit {

  @Input() doctor: Medecins;
  @Input() doctorId: number;
  constructor(public service: DisplayServiceService) { }

  ngOnInit(): void {
  }

  getService() {
    let service = this.service.getServiceList()[this.doctor.idservice];
    if (service)
      return service.nomservice;
  }
}
