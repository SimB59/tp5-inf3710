import { Component, Input, OnInit } from '@angular/core';
import { Medecins } from '../display-page/medecins';
import { DisplayServiceService } from '../services/display-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponentComponent } from '../delete-component/delete-component.component';
import { ModificationComponentComponent } from '../modification-component/modification-component.component';

@Component({
  selector: 'app-display-entry',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.css']
})
export class DisplayEntryComponent implements OnInit {

  @Input() doctor: Medecins;
  @Input() doctorId: number;
  constructor(public service: DisplayServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModificationDialog() {
    this.dialog.open(ModificationComponentComponent, {
      data: {doctor: this.doctor, index: this.doctorId}
    });
  }

  openDeleteDialog() {
    this.dialog.open(DeleteComponentComponent, {
      data: {doctor: this.doctor, index: this.doctorId}
    });
  }

  getService() {
    let service = this.service.getServiceList()[this.doctor.idservice];
    if (service)
      return service.nomservice;
  }
}
