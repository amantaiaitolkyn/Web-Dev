import { Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "./models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  companies: Company[] = [];
  newCompanyName: string = '';
  newCompanyDesc: string = '';
  newCompanyCity: string = '';
  newCompanyAddress: string = '';
  updatedName: string = '';
  updatedDesc: string = '';
  updatedCity: string = '';
  updatedAddress: string = '';
  choice = 0;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {
    // this.company={} as Company;
  }

  ngOnInit() {
    this.getCompany();
    // this.getVacancy();
  }
  getCompany(){
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    })
  }
  addCompany() {
    if (this.newCompanyName.length) {
      this.companyService.createCompany(this.newCompanyName, this.newCompanyDesc, this.newCompanyCity, this.newCompanyAddress).subscribe((company) => {
        this.companies.push(company);
        this.newCompanyName = '';
        this.newCompanyDesc = '';
        this.newCompanyCity = '';
        this.newCompanyAddress = '';
      });
    }
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe((company) => {
      this.companies = this.companies.filter((company) => company.id !== id);
    });
  }
  update(company: Company,id: number){
    this.companyService.updateName(company,this.updatedName,this.updatedDesc,this.updatedCity,this.updatedAddress,id).subscribe((company) => {
      this.companies = this.companies.filter((company) => company.id);
      this.updatedName = '';
      this.updatedDesc = '';
      this.updatedCity = '';
      this.updatedAddress = '';
    });
  }

  viewVacancy(id: number){
    this.choice = id;
  }

}
