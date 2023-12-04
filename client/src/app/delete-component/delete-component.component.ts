import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medecins } from '../display-page/medecins';
import { DisplayServiceService } from '../services/display-service.service';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    doctor: Medecins, index: number;
  }, public service: DisplayServiceService) { }

  ngOnInit(): void {
  }

}
