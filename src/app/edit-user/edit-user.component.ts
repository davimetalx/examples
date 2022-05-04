import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  updateUser = this.formBuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  obs?: Subscription;
  
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.getUserId();
    this.getUser(id);
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe();
  }

  getUserId(): number {
    return this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.obs = this.userService.updateUser(this.getUserId(), this.updateUser.value).subscribe(() => {
      this.updateUser.reset();
      alert("User update with success!");
      this.router.navigate(['/list-users'], { relativeTo: this.route });
    });
  }

  getUser(id: number) {
    this.obs = this.userService.getUser(id).subscribe((data) => {
      this.updateUser.setValue(data);
    });
  }

}
