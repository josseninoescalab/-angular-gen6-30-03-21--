import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.listar().subscribe( (data) => {
      this.users = data;
      console.log(data);
    })

  }

}
