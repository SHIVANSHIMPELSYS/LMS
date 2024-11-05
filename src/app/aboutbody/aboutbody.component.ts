import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutbody',
  templateUrl: './aboutbody.component.html',
  styleUrls: ['./aboutbody.component.css']
})
export class AboutbodyComponent {
  title:string="EMP Details"
   employees:any = [
    {
      "empCode": "E001",
      "name": "Shivansh",
      "age": 35,
      "designation": "Manager",
      "country": "INDIA"
    },
    {
      "empCode": "E002",
      "name": "Shukla",
      "age": 35,
      "designation": "Lead Developer",
      "country": "UK"
    },
    {
      "empCode": "E003",
      "name": "Douglas Pace",
      "age": 35,
      "designation": "Project Manager",
      "country": "HK"
    },
    {
      "empCode": "E004",
      "name": "Mcleod Mueller",
      "age": 32,
      "designation": "Software Engineer",
      "country": "USA"
    },
    {
      "empCode": "E005",
      "name": "Cook Tyson",
      "age": 32,
      "designation": "QA Engineer",
      "country": "USA"
    }
  ];
}
