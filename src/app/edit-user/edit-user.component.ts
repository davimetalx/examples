import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formUserEdit = this.formBuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });
  
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.getUserId();
    this.getUser(id);
  }

  getUserId(): number {
    return this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.userService.updateUser(this.getUserId(), this.formUserEdit.value).subscribe(() => {
      this.formUserEdit.reset();
      alert("User update with success!");
      this.router.navigate(['/list-users'], { relativeTo: this.route });
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe((data) => {
      this.formUserEdit.setValue(data);
    });
  }

}
