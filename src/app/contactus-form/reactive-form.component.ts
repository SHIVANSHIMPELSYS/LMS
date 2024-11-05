// import { Component } from '@angular/core';
// import { FormGroup,  FormBuilder,Validators } from '@angular/forms';
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent {
//   title = 'Internship Program For Software Developers';
//    angForm!: FormGroup;
//    constructor(private fb: FormBuilder) {
//     this.createForm();
//   }
//    createForm() {
//     this.angForm = this.fb.group({
//        name: ['', Validators.required ],
//        address: ['', Validators.required ]
//     });
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  evaluationForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.evaluationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      course: ['', Validators.required],
      lookingFor: ['', Validators.required],
      additionalDetails: [''],
      terms: [false, Validators.requiredTrue],
    });
  }
  onSubmit() {
    if (this.evaluationForm.valid) {
      console.log(this.evaluationForm.value);
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
