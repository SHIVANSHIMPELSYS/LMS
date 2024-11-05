import { Component } from '@angular/core';
import { User } from 'src/user.interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css'],
})
export class TformComponent {
  user = { email: '', password: '' };
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
