import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formUser = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.createUser(this.formUser.value).subscribe(() => {
      alert("User create with success!");
      this.formUser.reset();
    });
  }

}
