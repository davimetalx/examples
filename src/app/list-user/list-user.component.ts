import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  dataSource: any;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.dataSource = data;
    });
  }

}
