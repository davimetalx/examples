import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user = new User();
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  updateUser(f: NgForm) {
    console.log(f.value);
    console.log(this.user);
    f.resetForm();
  }

  getUser(id: number) {
    this.userService.getUser(id)
    .subscribe(data => {
      this.user = data;
    });
  }

}
