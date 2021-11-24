import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [
    {id: 1, firstName: 'Davi', lastName: 'Nascimento da Silva', username: 'davinascimentodasilva10', email: 'davinascimentodasilva10@gmail.com', phone: '(85)99229-2132'},
    {id: 2, firstName: 'Teste', lastName: 'Teste', username: 'teste', email: 'teste@gmail.com', phone: '(85)99229-2132'}
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
