import { Component,Input,Output, OnInit,} from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  @Input() company_id = 0;
  vacancies: Vacancy[] = [];

  newName= '';
  newDesc= '';
  company_idd= 0;
  salary= 0;

  updatedName: string = '';
  updatedDesc: string = '';
  updatedSalary: number = 0;

  constructor(private vacancyService: VacancyService){

  }
  ngOnInit() {
    this.getVacancy()
  }

  getVacancy(){
    this.vacancyService.getVacancy().subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    })
  }
  addVacancy(){
    if (this.newName.length) {
      this.vacancyService.createVacancy(this.newName, this.newDesc, this.company_idd, this.salary).subscribe((vacancy) => {
        this.vacancies.push(vacancy);
        this.newName = '';
        this.newDesc = '';
        this.company_idd = 0;
        this.salary = 0;
      });
    }
  }
  deleteVacancy(id: number){
    this.vacancyService.deleteVacancy(id).subscribe((vacancy) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
    });
  }

  updateName(vacancy: Vacancy,id: number){
    this.vacancyService.updateName(vacancy,this.updatedName,this.updatedDesc,this.updatedSalary,id).subscribe((vacancy) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id);
      this.updatedName = '';
      this.updatedDesc = '';
      this.updatedSalary = 0;
    });
  }

}
