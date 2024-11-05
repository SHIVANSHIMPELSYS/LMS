export interface User {
    name: string; // required with minimum 5 characters
    address: {
    street: string; // required
    postcode: string;
    }
    gender: string;
    course: string; 
    remarks: string; 
}