import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{
  

  employees:any;
  constructor(private api:ApiService){
    this.employees=api.employees;
  }
  
  ngOnInit(): void {
    let differnce=this.api.calculateage(new Date(),new Date());
  }

}
