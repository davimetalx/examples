import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  createUser(f: NgForm) {
    console.log(f.value);
    f.resetForm();
  }

}
