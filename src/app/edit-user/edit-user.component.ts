import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params['id'];
  }

  updateUser(f: NgForm) {
    console.log(f.value);
    f.resetForm();
  }

  getUser(id: number) {
    
  }

}
