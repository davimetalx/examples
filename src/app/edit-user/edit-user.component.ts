import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user = new User();
  
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const id = this.getUserId();
    this.getUser(id);
  }

  getUserId(): number {
    return this.route.snapshot.params['id'];
  }

  updateUser(f: NgForm) {
    this.userService.updateUser(this.getUserId(), f.value).subscribe((data) => {
      console.log(data);
      f.resetForm();
      alert("User update with success!");
      this.router.navigate(['/list-users'], { relativeTo: this.route });
    });
  }

  getUser(id: number) {
    this.userService.getUser(id)
    .subscribe((data) => {
      this.user = data;
    });
  }

}
