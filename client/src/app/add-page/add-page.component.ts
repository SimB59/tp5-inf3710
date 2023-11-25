import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../services/display-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  public optionsService: String[];
  addForm: FormGroup;

  constructor(public service: DisplayServiceService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      specialityValue: new FormControl("", [Validators.required]),
      years: new FormControl([Validators.required]),
    });
  }

  onSubmit() {
    this.service.addDoctor( {
      idmedecin: 1,
      prenom : this.addForm.value.firstName, 
      nom : this.addForm.value.name, 
      specialite : this.addForm.value.specialityValue, 
      anneesexperience : this.addForm.value.years,
      idservice: this.getServiceId(this.addForm.value.specialityValue)
    });
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
