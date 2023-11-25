import { Injectable } from '@angular/core';
import { Medecins } from '../display-page/medecins';
import { ClientControllerService } from '../client-controller.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  private doctorList:Medecins[] = new Array();
  private serviceList: any[] = new Array();

  constructor(private comService: ClientControllerService) { }

  public getDoctorList() {
    return this.doctorList;
  }

  public getServiceList() {
    return this.serviceList;
  }

  loadData() {
    this.comService.getAllMedecins().subscribe((allMedecins) => {
      this.doctorList = allMedecins;
    });
    this.comService.getAllService().subscribe((all) => {
      this.serviceList = all;
    });
  }

  public deleteDoctor(index: number, listIndex:number) {
    this.comService.deleteMedecin(index.toString()).subscribe();
    this.doctorList.splice(listIndex, 1);
  }

  public modifyDoctor(data: Medecins) {
    this.comService.updateMedecins(data).subscribe();
    this.doctorList[data.idmedecin] = data;
  }

  public addDoctor(data: Medecins) {
    this.comService.addMedecin(data).subscribe();
    this.doctorList.push(data);
  }
}
