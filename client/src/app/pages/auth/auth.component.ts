import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../data/services/user.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  userService = inject(UserService);
  users: any = [];

  constructor() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
