import { Component, Inject, OnInit } from '@angular/core';
import { DisplayServiceService } from '../services/display-service.service';
import { Medecins } from '../display-page/medecins';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modification-component',
  templateUrl: './modification-component.component.html',
  styleUrls: ['./modification-component.component.css']
})
export class ModificationComponentComponent implements OnInit {
  modifyForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    doctor: Medecins, index: number;
  }, public service: DisplayServiceService) { }

  ngOnInit(): void {
    this.modifyForm = new FormGroup({
      firstName: new FormControl(this.data.doctor.prenom, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      name: new FormControl(this.data.doctor.nom, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      specialityValue: new FormControl(this.data.doctor.specialite, [Validators.required]),
      years: new FormControl(this.data.doctor.anneesexperience, [Validators.required, Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(100)]),
    });
  }

  onSubmit() {
    this.service.modifyDoctor( {
      idmedecin: this.data.doctor.idmedecin,
      prenom : this.modifyForm.value.firstName, 
      nom : this.modifyForm.value.name, 
      specialite : this.modifyForm.value.specialityValue, 
      anneesexperience : this.modifyForm.value.years,
      idservice: this.getServiceId(this.modifyForm.value.specialityValue)
    }, this.data.index);
  }

  getServiceId(serviceValue: string): number {
    for (const element of this.service.getServiceList()) {
      if(serviceValue == element.nomservice) {
        return element.idservice;
      }
    }
    return -1;
  }

}
