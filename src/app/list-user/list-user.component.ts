import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
  }

}
