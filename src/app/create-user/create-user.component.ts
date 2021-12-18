import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  createUser(f: NgForm) {
    this.userService.createUser(f.value).subscribe((data) => {
      console.log(data);
      alert("User create with success!");
      f.resetForm();
    });
  }

}
