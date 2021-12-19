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
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        title: `Delete ${user.firstName}`,
        message: `Do you want delete ${user.firstName}`
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
        if (data === true) {
          this.userService.deleteUser(user.id).subscribe(() => {
            this.users = this.users.filter(u => u !== user);
          });
        }
    });
  }

}
