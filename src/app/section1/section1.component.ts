import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
})
export class Section1Component implements OnInit {
  messages = [
    'Create Engaging Courses',
    'Manage and Deliver Content',
    'Track Performance',
    'Gather Feedback',
    'Monitor Completion',
    
  ];
  currentMessageIndex = 0;
  ngOnInit() {
    this.cycleMessages();
  }
  cycleMessages() {
    setInterval(() => {
      this.currentMessageIndex =
        (this.currentMessageIndex + 1) % this.messages.length;
    }, 1500);
  }
}
