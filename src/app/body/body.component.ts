import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  people: any[] = [
    {
    "name": "Douglas Pace",
    "age": 35
    },
    {
    "name": "Mcleod Mueller",
    "age": 32
    },
    {
    "name": "Day Meyers",
    "age": 21
    }
    ];

    people1: any[] = [
      {
        "name": "shivansh",
        "age": 35,
        "country": 'INDIA'
      },
      {
        "name": "shukla",
        "age": 35,
        "country": 'UK'
      },
      {
        "name": "Douglas  Pace",
        "age": 35,
        "country": 'HK'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32,
        "country": 'USA'
      },
     {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'USA'
      }
    ];

}
