import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogDeleteComponent } from 'src/app/dialog-delete/dialog-delete.component';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog, private userService: UserService) { }

  @Input()
  dataSource: any;
  obs?: Subscription;

  displayedColumns: string[] = ['firstName', 'lastName', 'username', 'email', 'phone', 'edit', 'delete'];

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe();
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
          this.obs = this.userService.deleteUser(user.id!).subscribe(() => {
            this.dataSource = this.dataSource.filter((u: User) => u !== user);
          });
        }
    });
  }

}
