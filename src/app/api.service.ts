import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  employees=[
    {no:1, name:"Omkar", age:23},
    {no:2, name:"Abhi", age:21},
    {no:3, name:"Vinayak", age:24},
    {no:4, name:"Vishawjeet", age:22}
  ]

  constructor() { }
  calculateage(todayDate:Date, birthDate:Date):number{
    let differnce=0;
    return differnce;
  }
}
