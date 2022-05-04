import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnDestroy {

  dataSource: any;

  obs?: Subscription;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.obs = this.userService.getUsers().subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe();
  }

}
