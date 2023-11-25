import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../services/display-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Medecins } from '../display-page/medecins';

@Component({
  selector: 'app-modify-doctor',
  templateUrl: './modify-doctor.component.html',
  styleUrls: ['./modify-doctor.component.css']
})
export class ModifyDoctorComponent implements OnInit {
  private id: number;
  public optionsService: String[];
  addForm: FormGroup;
  public doctor: Medecins;

  constructor(private router: Router, public service: DisplayServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        this.doctor = {idmedecin: params.id, prenom: params.fname, nom: params.lname, specialite: params.speciality, anneesexperience: params.years, idservice: this.service.getServiceList()[parseInt(params.idService)].nomservice};
      }
    );
    this.addForm = new FormGroup({
      firstName: new FormControl(this.doctor.prenom, [Validators.required]),
      name: new FormControl(this.doctor.nom, [Validators.required]),
      specialityValue: new FormControl(this.doctor.specialite, [Validators.required]),
      years: new FormControl(this.doctor.anneesexperience, [Validators.required]),
    });
  }

  onSubmit() {
    this.service.modifyDoctor( {
      idmedecin: this.id,
      prenom : this.addForm.value.firstName, 
      nom : this.addForm.value.name, 
      specialite : this.addForm.value.specialityValue, 
      anneesexperience : this.addForm.value.years,
      idservice: this.getServiceId(this.addForm.value.specialityValue)
    });
    this.router.navigate(["/display"]);
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
