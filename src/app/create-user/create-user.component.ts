import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit(): void {
    
  }

  createUser(f: NgForm) {
    console.log(f.value);
    console.log(this.user);
    f.resetForm();
  }

}
