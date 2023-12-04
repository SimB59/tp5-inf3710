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
      firstName: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      name: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      specialityValue: new FormControl("", [Validators.required]),
      years: new FormControl("", [Validators.required, Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(100)]),
    });
  }

  onSubmit() {
    this.service.addDoctor( {
      idmedecin: 1, // To be changed
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
