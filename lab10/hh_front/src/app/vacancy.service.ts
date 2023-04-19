import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }

  getVacancy(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`)
  }

  createVacancy(vacancyName: string,vacancyDesc:string,company_id:number,salary:number): Observable<Vacancy>{
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies/`,{name:vacancyName, description:vacancyDesc, company:company_id, salary:salary}
    )
  }

  deleteVacancy(id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${id}/`
    )
  }
  updateName(vacancy: Vacancy,newName: string,newDesc:string,newSalary:number,id: number): Observable<Vacancy>{
    return this.client.put<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`, {name:newName,description:newDesc,salary:newSalary
    });
  }
}
