import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  createUser = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  obs?: Subscription;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe();
  }

  onSubmit() {
    this.obs = this.userService.createUser(this.createUser.value).subscribe(() => {
      alert("User create with success!");
      this.createUser.reset();
    });
  }

}
