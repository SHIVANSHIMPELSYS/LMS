import { Component } from '@angular/core';

@Component({
  selector: 'app-tformnointerface',
  templateUrl: './tformnointerface.component.html',
  styleUrls: ['./tformnointerface.component.css']
})
export class TformnointerfaceComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    terms: ''
  };

  // This method will be called when the form is submitted
  onSubmit(form: any) {
    if (form.valid) {
      // Handle the form submission logic here
      console.log('Form Submitted!', this.user);
      // You can also send this data to your backend service
    } else {
      // Handle the case where the form is invalid
      console.log('Form is invalid!');
    }
  }

}
