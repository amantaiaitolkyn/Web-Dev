import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company,Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`)
  }

  createCompany(companyName: string,companyDesc:string,companyCity:string,companyAddress:string,): Observable<Company>{
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,{name:companyName, description:companyDesc, city:companyCity, address:companyAddress}
    )
  }

  deleteCompany(id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${id}/`
    )
  }

  updateName(company: Company,newName: string,newDesc: string,newCity: string,newAddress: string,id: number): Observable<Company>{
    return this.client.put<Company>(`${this.BASE_URL}/api/companies/${id}/`, {name:newName,description:newDesc,city:newCity,address:newAddress});
  }

}

