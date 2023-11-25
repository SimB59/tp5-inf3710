import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Medecins } from './display-page/medecins';
import { HttpClient } from '@angular/common/http';

const END_POINT = 'http://localhost:3000/database';
@Injectable({
  providedIn: 'root'
})
export class ClientControllerService {

  constructor(private readonly http: HttpClient) { }

    getAllMedecins(): Observable<Medecins[]> {
        return this.http.get<Medecins[]>(END_POINT).pipe(catchError(this.handleError<Medecins[]>('basicGet')));
    }

    getAllService(): Observable<String[]> {
      return this.http.get<String[]>(END_POINT + `/services`).pipe(catchError(this.handleError<String[]>('basicGet')));
  }

    updateMedecins(med: Medecins): Observable<void> {
        return this.http.patch<void>(END_POINT, med).pipe(catchError(this.handleError<void>('medecins')));
    }

    addMedecin(med: Medecins): Observable<void> {
        return this.http.post<void>(END_POINT, med).pipe(catchError(this.handleError<void>('medecins')));
    }
    deleteMedecin(num: string): Observable<void> {
        return this.http.delete<void>(END_POINT + `/${num}`).pipe(catchError(this.handleError<void>('medecins')));
    }
    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return () => of(result as T);
    }
}
