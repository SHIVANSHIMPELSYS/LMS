import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-frompractice',
  templateUrl: './frompractice.component.html',
  styleUrls: ['./frompractice.component.css']
})
export class FrompracticeComponent {
  softwareOptions = [
    { value: 'opt1', label: 'Opt1' },
    { value: 'opt2', label: 'Opt2' },
    { value: 'opt3', label: 'Opt3' }
  ];

  selectedSoftware: string[] = [];

  onCheckboxChange(event: Event, option: { value: string }, form: NgForm) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedSoftware.push(option.value);
    } else {
      this.selectedSoftware = this.selectedSoftware.filter(
        value => value !== option.value
      );
    }
    form.value.software = this.selectedSoftware;
  }

  onSubmit(form: NgForm) {
    form.value.software = this.selectedSoftware;
    console.log(form.value);
  }
}
