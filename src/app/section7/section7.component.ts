import { Component } from '@angular/core';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css'],
})
export class Section7Component {
  data = [
    {
      name: 'Personal Plan',
      people: 'Individual',
      price: 'Starting at ₹850 per month',
      info: 'Billed monthly or annually.',
      i1: 'Individual user access',
      i2: 'Unlimited projects',
      i3: 'Priority support',
      i4: 'Access to basic analytics',
      i5: 'Monthly backups',
    },
    {
      name: 'Team Plan',
      people: '2 to 20 People',
      price: 'Starting at ₹1850 per month',
      info: 'Billed monthly or annually.',
      i1: 'Shared team access (2-20 people)',
      i2: 'Collaboration tools',
      i3: 'Enhanced analytics',
      i4: 'Customizable dashboards',
      i5: 'Role-based access control',
    },
    {
      name: 'Enterprise Plan',
      people: 'More than 20 People',
      price: 'Starting at ₹2850 per month',
      info: 'Billed monthly or annually.',
      i1: 'Unlimited user access',
      i2: 'Advanced security features',
      i3: 'Dedicated account manager',
      i4: 'Comprehensive reporting',
      i5: '24/7 premium support',
    },
  ];
}
