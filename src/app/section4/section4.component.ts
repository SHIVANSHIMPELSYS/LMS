import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
})
export class Section4Component {
  courses = [
    {
      name: 'REACT JS',
      image: 'assets/professional wallpaper for React.js.png',
      link: '/react',
    },
    {
      name: 'ANGULAR',
      image: 'assets/professional wallpaper featuring AngularJS.png',
      link: '/angular',
    },
    {
      name: 'GEN AI',
      image: 'assets/Gen AI in professional font.png',
      link: '/genai',
    },
    {
      name: 'DEVOPS',
      image: 'assets/professional wallpaper for DevOps.png',
      link: '/devops',
    },
  ];
}
